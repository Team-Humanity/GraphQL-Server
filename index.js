const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String!
    about: String
    address: Address
  }

  type Address {
    streetAddress: String!
    aptSuit: String
    state: String!
    zipCode: Int!
    stateAbbr: String
  }

  type Query {
    user: User
  }
  schema {
    query: Query
  }
`;

const resolvers = {
  Query: {
    user: () => {
      return {
        id: 123,
        firstName: 'Tom',
        lastName: 'Smith',
        age: 26,
        email: 'tom@fakemail.com',
        about: '',
        address: {
          streetAddress: '123 marigold lane',
          state: 'GA',
          zipCode: 123456
        }
      };
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
