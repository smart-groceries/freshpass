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
