import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const user = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [2, 'Firstname must be at least 2 characters long'],
        },
        lastname: {
            type: String,
            minlength: [2, 'Lastname must be at least 2 characters long'],
        }
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true,
        minlength: [10, 'Phone Number must be at least 10 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long'],
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long'],
    }
})

