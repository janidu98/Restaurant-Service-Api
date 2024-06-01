import express from 'express';
import { createNewRestaurant } from '../controllers/restaurantControllers.js';

const router = express.Router();

//create new restaurant
router.post('/create', createNewRestaurant);

export default router;