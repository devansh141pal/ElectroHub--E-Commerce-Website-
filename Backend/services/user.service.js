import userModel from "../models/user.model.js";

export const createUser = async ({
    firstname, lastname, email, password, phone, city, state, country
}) => {
    if (!firstname || !lastname || !email || !password || !phone || !city || !state || !country) {
        throw new Error("All fields are required");
    }

    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        phone,
        city,
        state,
        country
    });

    return user;
};