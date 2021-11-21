import {gql} from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation MyMutation(
    $email: String!
    $pass: String!
    $fname: String!
    $lname: String!
  ) {
    createAccount(
      name: "createAccount"
      email: $email
      pass: $pass
      fname: $fname
      lname: $lname
    ) {
      account_id
      email
      first_name
      last_name
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation MyMutation($id: Int!, $pass: String!) {
    updatePassword(
      account_id: $id
      name: "updatePassword"
      new_password: $pass
    ) {
      state
      message
    }
  }
`;
