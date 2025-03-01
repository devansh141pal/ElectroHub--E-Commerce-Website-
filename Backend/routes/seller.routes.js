import express from 'express';
const router = express.Router();
import { registerSeller, loginSeller } from '../controllers/seller.controller.js';
import { body } from 'express-validator';

router.post('/register', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullname.firstname').isLength({ min: 2 }).withMessage('Firstname must be at least 2 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('phone').isLength({ min: 10 }).withMessage('Phone number must be at least 10 characters long'),
    body('upiID').isLength({ min: 6 }).withMessage('UPI ID must be at least 6 characters long'),
    body('city').isLength({ min: 2 }).withMessage('City must be at least 2 characters long'),
    body('state').isLength({ min: 2 }).withMessage('State must be at least 2 characters long'),
    body('country').isLength({ min: 2 }).withMessage('Country must be at least 2 characters long'),
    body('pincode').isLength({ min: 6 }).withMessage('Pincode must be at least 6 characters long'),
],
    registerSeller
);

router.post('/login', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
    loginSeller
);



 
export default router;