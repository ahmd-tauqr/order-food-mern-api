import mongoose from 'mongoose'

import UserModel from '../db/models/user.model'
import PlaceModel from '../db/models/place.model'
import RestaurantModel from '../db/models/restaurant.model'
import CousineModel from '../db/models/cousine.model'

// make a connection
mongoose.connect('mongodb://localhost:27017/mern-fs', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

const database = mongoose.connection

database.on('error', console.log.bind(console, 'connection error: '))

database.once('open', () => {
  console.log('connected to database.')
})

const db = {
  UserModel,
  PlaceModel,
  RestaurantModel,
  CousineModel
}

export {db as default}