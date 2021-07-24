import {GraphQLServer} from 'graphql-yoga';

import db from "./db/db";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

const server = new GraphQLServer({
    typeDefs: "src/typeDefs/schema.graphql",
    resolvers: {
      Query,
      Mutation
    },
    context: (req) => {
      return {
        db,
        req
      };
    },
  });

  const options = {
    port: 4000
  };

server.start(options,() => {
    console.log('server is running...')
})