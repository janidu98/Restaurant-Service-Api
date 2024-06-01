import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;