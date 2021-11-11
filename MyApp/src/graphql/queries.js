import { gql } from '@apollo/client';

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
`

export const CREATE_ACCOUNT = gql`
    query MyQuery2($uname: String!, $pass: String!, $fname: String!, $lname: String!, $email: String!) {
        createAccount(name: "createAccount", uname: $uname, pass: $pass,fname: $fname, lname: $lname, email: $email) {
                id
        }
    }
`