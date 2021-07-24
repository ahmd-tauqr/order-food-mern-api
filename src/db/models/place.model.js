import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PlaceSchema = new Schema({
    id: String,
    name: String,
    restaurants: Array
})

export default mongoose.model('Place', PlaceSchema)