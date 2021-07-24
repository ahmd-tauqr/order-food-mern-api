import getLoginCred from "../utils/getLoginCred";

// seed data
// there is no way to add restaurants, places and cousines
// so seeding them from json file

import * as PlaceSeedData from '../data/places.json';
import * as RestaurantsSeedData from '../data/restaurants.json';
import * as CousinesSeedData from '../data/cousines.json';
import * as UsersSeedData from '../data/users.json';

const Query = {
  
  fetchUsers: async (parent, { is_active }, { db, req }, info) => {
    const id = getLoginCred(req);
    try {
      const users = await db.UserModel.find();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  },

  fetchPlaces: async (parent, { is_active }, { db, req }, info) => {
    const id = getLoginCred(req);
    try {
      const places = await db.PlaceModel.find();
      return places;
    } catch (error) {
      throw new Error(error);
    }
  },

  fetchRestaurants: async (parent, { is_active }, { db, req }, info) => {
    const id = getLoginCred(req);
    try {
      const restaurants = await db.RestaurantModel.find();
      return restaurants;
    } catch (error) {
      throw new Error(error);
    }
  },

  fetchCousines: async (parent, { is_active }, { db, req }, info) => {
    const id = getLoginCred(req);
    try {
      const cousines = await db.CousineModel.find();
      return cousines;
    } catch (error) {
      throw new Error(error);
    }
  },

  seedData: async (parent, { data }, { db }, info) => {
    try {
      db.PlaceModel.insertMany(PlaceSeedData, (err, docs) => {
        console.log('places seeded', docs)
      });
      db.RestaurantModel.insertMany(RestaurantsSeedData, (err, docs) => {
        console.log('restaurants seeded', docs)
      });
      db.CousineModel.insertMany(CousinesSeedData, (err, docs) => {
        console.log('cousines seeded', docs)
      });
      db.UserModel.insertMany(UsersSeedData, (err, docs) => {
        console.log('users seeded', docs)
      });
      
      return "Data seeded successfully!"
    } catch (error) {
      return error;
    }
  },

};

export { Query as default };
