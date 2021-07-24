import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CousineSchema = new Schema({
    id: String,
    name: String,
    restaurantId: String,
    price: Number
})

export default mongoose.model('Cousine', CousineSchema)