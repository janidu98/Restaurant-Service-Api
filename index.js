import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import restaurantRoutes from './routes/restaurantRoutes.js';
import { errorHanlder } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

//connect to the mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!`);
    })
})
.catch((err) => {
    console.log(err);
})

//routing
app.use('/api/restaurant', restaurantRoutes);

//error handler middleware
app.use(errorHanlder);