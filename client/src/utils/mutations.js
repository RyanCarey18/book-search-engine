import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($profileId: ID!, $skill: String!) {
    saveBook(profileId: $profileId, skill: $skill) {
      _id
      username
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeSkill($bookId: String!) {
    removeSkill(bookId: $String) {
      _id
      username
      savedBooks
    }
  }
`;
