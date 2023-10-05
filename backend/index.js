import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./_db.js";

//types
import { typeDefs } from "./schema.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    expenses() {
      return db.expenses;
    },
    expense(_, args) {
      return db.expenses.find((expense) => expense.id === args.id);
    },
  },
  Mutation: {
    deleteExpense(_, args) {
      db.expenses = db.expenses.filter((e) => e.id !== args.id);
      return db.expenses;
    },
    addExpense(_, args) {
      let expense = {
        ...args.expense,
        id: Math.floor(Math.random() *10000).toString(),
      }
      db.expenses.push(expense);

      return expense;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const port = Number.parseInt(process.env.PORT) || 4000;

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: {port: port},
});

console.log(`🚀 Server listening at: ${url}`);