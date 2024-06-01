import express from 'express';
import { createNewRestaurant, getOneRestaurant, updateRestaurant } from '../controllers/restaurantControllers.js';

const router = express.Router();

//create new restaurant
router.post('/create', createNewRestaurant);

//get one restaurant details
router.get('/:id', getOneRestaurant);

//update a restaurant details
router.post('/update/:id', updateRestaurant);

export default router;