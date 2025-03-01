import sellerModel from '../models/seller.model.js';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { createSeller } from '../services/seller.service.js';

export const registerSeller = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { fullname, email, password, phone, upiID, city, state, country, pincode } = req.body;
        
        const existingSeller = await sellerModel.findOne({ email });
        if (existingSeller) {
            return res.status(400).json({ errors: [{ msg: "Seller already exists" }] });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const seller = await createSeller({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            phone,
            upiID,
            city,
            state,
            country,
            pincode
        });
        const token = seller.generateAuthToken();
        
        return res.status(200).json({ token, seller });
    }
    catch (error) {
        console.error("Error in registerUser:", error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
};

export const loginSeller = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        
        const seller = await sellerModel.findOne({ email }).select("+password");
        if (!seller) {
            return res.status(400).json({ errors: [{ msg: "Invalid credentials or Unauthorised" }] });
        }

        const isMatch = await bcrypt.compare(password, seller.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: "Invalid credentials or Unauthorised" }] });
        }

        const token = seller.generateAuthToken();
        
        return res.status(200).json({ token, seller });
    }
    catch (error) {
        console.error("Error in loginSeller:", error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
}