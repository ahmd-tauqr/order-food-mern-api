import mongoose from 'mongoose'

const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
    id: String,
    name: String,
    placeId: String,
    cousines: Array,
    minPrice: Number
})

export default mongoose.model('Restaurant', RestaurantSchema)