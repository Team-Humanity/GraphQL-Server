const { ApolloServer, gql } = require('apollo-server');
const { Console } = require('console');

const typeDefs = gql`
  type User {
    id: ID
    firstName: String!
    lastName: String!
    age: Int
    email: String!
    address: Address!
    picture: ProfilePicture!
  }

  type Address {
    streetAddress: String!
    aptSuit: String
    city: String!
    zipCode: Int!
    stateAbbr: String!
  }

  type ProfilePicture {
    fileName: String!
  }

  input UserInput {
    id: String!
    firstName: String!
    lastName: String!
    age: Int
    email: String!
    profilePicture: ProfilePictureInput
    address: AddressInput!
  }

  input ProfilePictureInput {
    fileName: String!
  }

  input AddressInput {
    streetAddress: String!
    aptSuit: String
    city: String!
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
    user: () => ({
      id: 123,
      firstName: 'Tom',
      lastName: 'Smith',
      age: 26,
      email: 'tom@fakemail.com',
      address: {
        streetAddress: '123 marigold lane',
        stateAbbr: 'GA',
        zipCode: 123456,
      },
      picture: {
        fileName: 'fileSave.txt',
      },
    }),
  },
  Mutation: {
    createProfile: () => ({
      id: 123,
      firstName: 'Jay',
      lastName: 'Smith',
      age: 26,
      email: 'tom@fakemail.com',
      address: {
        streetAddress: '123 marigold lane',
        stateAbbr: 'GA',
        zipCode: 123456,
      },
      picture: {
        fileName: 'fileSave.txt',
      },
    }),
  },
};
const server = new ApolloServer({ cors: { origin: '*' }, typeDefs, resolvers });
server.listen().then(({ url }) => {
  Console.log(`🚀  Server ready at ${url}`);
});
