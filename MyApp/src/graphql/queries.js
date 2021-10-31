import { useQuery, gql } from '@apollo/client';



export const TEST_QUERY = gql`
    query MyQuery($id: ID!) {
        getParking(id: $id) {
            id
            name
            price
        }
    }  
`

