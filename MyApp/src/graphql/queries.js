import {gql} from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query MyQuery($id: ID!) {
    getUserById(name: "getUserById", id: $id) {
      email
      first_name
      id
      last_name
      username
    }
  }
`;

export const ADD_CARD_INFO = gql `
  mutation addCardMutation(		
    $name: String!,
		$account_id: Int!,
		$card_number: String!,
		$nameoncard: String!,
		$month: Int!,
		$year: Int!,
		$cvc: Int!){
      addCardInfo(name:"addCardInfo",account_id:$account_id,card_number:$card_number,nameoncard:$nameoncard,month:$month,year:$year,cvc:$cvc){
        message
      }
    }

`
// export const CREATE_ACCOUNT = gql`
//   query MyQuery2(
//     $uname: String!
//     $pass: String!
//     $fname: String!
//     $lname: String!
//     $email: String!
//   ) {
//     createAccount(
//       name: "createAccount"
//       uname: $uname
//       pass: $pass
//       fname: $fname
//       lname: $lname
//       email: $email
//     ) {
//       id
//     }
//   }
// `;

export const AUTHENTICATE = gql`
  query MyQuery($email: String!, $pass: String!) {
    authn(name: "authn", email: $email, pass: $pass) {
      account_id
      email
      first_name
      last_name
    }
  }
`;
