import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./_db.js";

//types
import { typeDefs } from "./schema.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    processors() {
      return db.processors;
    },
    processor(_, args) {
      return db.processors.find((processor) => processor.id === args.id);
    },
    clients() {
      return db.clients;
    },
    client(_, args) {
      return db.clients.find((client) => client.id === args.id);
    },
  },
  Processor: {
    clients(parent) {
      return db.clients.filter((p) => p.processor_id === parent.id);
    },
  },
  Client: {
    processors(parent) {
      return db.processors.filter(
        (processor) => processor.id === parent.processor_id
      );
    },
  },
  Mutation: {
    deleteClient(_, args) {
      db.clients = db.clients.filter((c) => c.id !== args.id);
      return db.clients;
    },
    addClient(_, args) {
      let client = {
        ...args.client,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.clients.push(client);

      return client;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const port = Number.parseInt(process.env.PORT) || 4000;

const { url } = await startStandaloneServer(server, { listen: { port } });

console.log(`🚀 Server listening at: ${url}`);