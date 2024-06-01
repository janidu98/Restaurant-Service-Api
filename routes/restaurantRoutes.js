import express from 'express';
import { createNewRestaurant, deleteRestaurant, getAllRestaurants, getOneRestaurant, updateRestaurant } from '../controllers/restaurantControllers.js';

const router = express.Router();

//create new restaurant
router.post('/create', createNewRestaurant);

//get one restaurant details
router.get('/get/:id', getOneRestaurant);

//update a restaurant details
router.put('/update/:id', updateRestaurant);

//delete a restaurant
router.delete('/delete/:id', deleteRestaurant);

//get all restaurants
router.get('/get', getAllRestaurants);

export default router;