import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const sellerSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [2, "Firstname must be at least 2 characters long"],
        },
        lastname: {
            type: String,
            minlength: [2, "Lastname must be at least 2 characters long"],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, "Email must be at least 6 characters long"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
        select: false
    },
    upiID: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, "UPI ID must be at least 6 characters long"],
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, "Phone number must be at least 10 characters long"],
    },
    city: {
        type: String,
        required: true,
        minlength: [2, "City must be at least 2 characters long"],
    },
    state: {
        type: String,
        required: true,
        minlength: [2, "State must be at least 2 characters long"],
    },
    country: {
        type: String,
        required: true,
        minlength: [2, "Country must be at least 2 characters long"],
    },
    pincode: {
        type: String,
        required: true,
        minlength: [6, "Pincode must be at least 6 characters long"],
    },

})

sellerSchema.methods.generateAuthToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

sellerSchema.methods.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

sellerSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

export default mongoose.model("seller", sellerSchema);