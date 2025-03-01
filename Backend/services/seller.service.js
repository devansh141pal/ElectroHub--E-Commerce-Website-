import sellerModel from "../models/seller.model.js";

export const createSeller = async ({
    firstname, lastname, email, password, phone, upiID, city, state, country, pincode
}) => {
    if (!firstname || !lastname || !email || !password || !phone || !upiID || !city || !state || !country || !pincode) {
        throw new Error("All fields are required");
    }

    const seller = await sellerModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        phone,
        upiID,
        city,
        state,
        country,
        pincode
    });

    return seller;
}