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
    profilePicture: ProfilePicture!
  }

  type Address {
    streetAddress: String!
    aptSuit: String
    state: String!
    zipCode: Int!
    stateAbbr: String
  }

  type ProfilePicture {
    fileName: String!
  }

  input UserInput {
    id: String!
    firstName: String!
    lastName: String!
    age: Int
    about: String!
    email: String!
    profilePicture: ProfilePictureInput!
    address: AddressInput!
  }

  input ProfilePictureInput {
    fileName: String!
  }

  input AddressInput {
    streetAddress: String!
    aptSuit: String
    state: String!
    zipCode: Int!
    stateAbbr: String
  }

  type Query {
    user: User
  }

  type Mutation {
    createProfile(user: UserInput!): User!
  }

  schema {
    query: Query
    mutation: Mutation
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
          zipCode: 123456,
        },
        profilePicture: {
          fileName: "fileSave.txt"
        }
      };
    },
  },
};
const server = new ApolloServer({ cors: { origin: '*' }, typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
