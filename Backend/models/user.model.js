import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
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
    }
});

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

userSchema.methods.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

export default mongoose.model("user", userSchema);