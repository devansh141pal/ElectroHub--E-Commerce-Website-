import { registerUser, loginUser, logoutUser } from '../controllers/user.controller.js';
import { body } from 'express-validator';
import express from 'express';
import { authUser } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('phone').isLength({ min: 10 }).withMessage('Phone number must be at least 10 characters long'),
    body('city').isLength({ min: 2 }).withMessage('City must be at least 2 characters long'),
    body('state').isLength({ min: 2 }).withMessage('State must be at least 2 characters long'),
    body('country').isLength({ min: 2 }).withMessage('Country must be at least 2 characters long'),
], registerUser);

router.post('/login', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], loginUser);

router.post('/logout', authUser, logoutUser);

export default router;