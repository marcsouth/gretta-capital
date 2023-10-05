export const typeDefs = `#graphql
  type Expense {
    id: ID
    card: String
    item: String
    amount: Float
    date: String
    deductible: Boolean
  }
  type Query {
    expenses: [Expense]
    expense(id: ID): Expense
  }
  type Mutation {
    addExpense( expense: AddExpenseInput!): Expense
    deleteExpense(id: ID): [Expense]
  }
  input AddExpenseInput {
    card: String!
    item: String!
    amount: Float!
    date: String!
    deductible: Boolean!
  }
`