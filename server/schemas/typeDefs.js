const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    user: User
    token: ID!
  }

  type Query {
    me(_id: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      bookId: String!
      title: String!
      authors: [String]
      description: String
      image: String
    ): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
