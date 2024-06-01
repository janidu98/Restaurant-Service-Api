import Restaurant from "../model/restaurantModel.js";
import { HttpException } from "../utils/error.js";

//create new restaurant
export const createNewRestaurant = async (req, res, next) => {
  const { name, address, telephone } = req.body;

  try {
    //check all fields are filled or not
    if (!name || !address || !telephone) {
      return next(HttpException(400, "All fields are required!"));
    }

    const newRestaurant = new Restaurant({
      name,
      address,
      telephone,
    });

    await newRestaurant.save();
    res
      .status(201)
      .json({
        data: newRestaurant,
        message: "New Restaurant created successfully",
      });
  } catch (error) {
    next(error);
  }
};

//get one restaurant details
export const getOneRestaurant = async (req, res, next) => {
  try {
    //find the restaurant by id
    const restaurant = await Restaurant.findById(req.params.id);

    //if id is not found
    if (!restaurant) {
      return next(HttpException(404, "Restaurant is not found!"));
    }

    res.status(200).json(restaurant);
  } catch (error) {
    next(error);
  }
};

//update a restaurant details
export const updateRestaurant = async (req, res, next) => {
  try {
    //find restaurant needed to update using by id
    const restaurant = await Restaurant.findById(req.params.id);

    //if id is not found
    if (!restaurant) {
      return next(HttpException(404, "Restaurant is not found!"));
    }

    //update restaurant details
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedRestaurant);

  } catch (error) {
    next(error);
  }
};

//delete a restaurant
export const deleteRestaurant = async(req, res, next) => {
    const restaurant = await Restaurant.findById(req.params.id);

    if(!restaurant) {
        return next(HttpException(404, 'Restaurant is not found!'));
    }

    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.status(200).json('Restaurant has been deleted!');

    } catch (error) {
        next(error);
    }
}

//get all restaurants
export const getAllRestaurants = async(req, res, next) => {
    try {
        const allrestaurants = await Restaurant.find();

        return res.status(200).json({data: allrestaurants});

    } catch (error) {
        next(error);
    }
}