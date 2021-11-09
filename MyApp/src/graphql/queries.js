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

