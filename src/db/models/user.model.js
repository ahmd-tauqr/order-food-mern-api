import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

export default mongoose.model('User', UserSchema)