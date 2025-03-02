import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, phone, city, state, country } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            phone,
            city,
            state,
            country
        });

        const token = user.generateAuthToken();

        return res.status(200).json({ token, user });
    } catch (error) {
        console.error("Error in registerUser:", error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ errors: [{ msg: "Invalid credentials or Unauthorised" }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: "Invalid credentials or Unauthorised" }] });
        }

        const token = user.generateAuthToken();

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development",
            sameSite: "strict",
            maxAge: 86400000 // 1 day
        });

        return res.status(200).json({ token, user });
    } catch (error) {
        console.error("Error in loginUser:", error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
};

export const logoutUser = async (req, res, next) => {
    try {
        req.user = null;

        return res.status(200).json({ message: "User logged out" });
    } catch (error) {
        console.error("Error in logoutUser:", error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
};