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
        console.log(error);
    }
};