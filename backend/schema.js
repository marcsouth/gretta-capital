export const typeDefs = `#graphql
  type Processor {
    id: ID
    processor: String
    merchantid: String
    adress: String
    ucc: Boolean
    clients: [Client]
  }
  type Client {
    id: ID
    name: String
    processors: [Processor] 
  }
  type Query {
    processors: [Processor]
    processor(id: ID): Processor
    clients: [Client]
    client(id: ID): Client
  }
  type Mutation {
    addClient(client: AddClientInput!): Client
    deleteClient(id: ID): [Client]
    deleteProcessor(id: ID): [Processor]
  }
  input AddClientInput {
    name: String!
    processor: [String!]!
  }
`