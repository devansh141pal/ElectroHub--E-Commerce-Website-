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

        const { fullname, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });

        const token = user.generateAuthToken();

        return res.status(200).json({ token, user });
    } catch (error) {
        console.log(error);
    }
};