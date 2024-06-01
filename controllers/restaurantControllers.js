import Restaurant from "../model/restaurantModel.js";
import { HttpException } from "../utils/error.js";

export const createNewRestaurant = async(req, res, next) => {
    const {name, address, telephone} = req.body;

    try {
        //check all fields are filled or not
        if(!name || !address || !telephone) {
            return next(HttpException(400, 'All fields are required!'));
        }

        const newRestaurant = new Restaurant({
            name,
            address,
            telephone
        })

        await newRestaurant.save();
        res.status(201).json({data: newRestaurant, message: 'New Restaurant created successfully'});

    } catch (error) {
        next(error);
    }
}