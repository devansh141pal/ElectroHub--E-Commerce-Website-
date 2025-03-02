import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';
import sellerModel from '../models/seller.model.js'

export const authUser = async function (req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'User is not authenticated' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ _id: decoded.id });

        if (!user) {
            return res.status(401).json({ message: 'User is not authenticated' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in authUser:", error);
        return res.status(401).json({ message: 'User is not authenticated' });
    }
};

export const authSeller = async function (req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Seller is not authenticated' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const seller = await sellerModel.findOne({ _id: decoded.id });

        if (!seller) {
            return res.status(401).json({ message: 'Seller is not authenticated' });
        }

        req.seller = seller;
        next();
    } catch (error) {
        console.error("Error in authSeller:", error);
        return res.status(401).json({ message: 'Seller is not authenticated' });
    }
};