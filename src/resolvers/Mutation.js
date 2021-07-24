import { v4 as uuidv4 } from "uuid";

// import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const SECRET_KEY = "sseeeccccret";

const Mutation = {
  login: async (parent, { email, password }, { db }, info) => {
    try {
      const user = await db.UserModel.find({
        email,
        password
      });

     
      if (user.length === 0) {
        throw new Error("incorrect credentials");
      }

      let userReturnData = {};

      if (user.length > 0) {
        const userData = {
          id: user[0].id,
        };
        const userToken = jwt.sign(userData, SECRET_KEY);
        userReturnData = { user: user[0], userToken: userToken };
      }
     
      return {...userReturnData};
    } catch (error) {
      throw new Error(error);
    }
  },

  createUser: async (parent, { data }, { db }, info) => {
    try {
      const emailCount = await db.UserModel.find({ email: data.email });

      if (emailCount.length > 0) {
        throw new Error("email already taken.");
      }

      const password =data.password.trim()

      const dataInput = { ...data, password: password };

      const userData = {
        id: uuidv4(),
        ...dataInput
      };

      const user = new db.UserModel(userData);
      await user.save();

      return user;
    } catch (error) {
      return error;
    }
  }
};

export { Mutation as default };
