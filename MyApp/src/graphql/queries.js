import {gql} from '@apollo/client';

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

export const GET_ALL_ITEMS = gql`
    query MyQuery {
        getAllItems(name: "getAllItems") {
            barcode_id
            item_brand
            item_name
            item_weight
        }
    }
`;

export const GET_BANK_INFO_BY_ID = gql`
    query MyQuery($account_id: Int!) {
        getBankInfoByID(account_id: $account_id, name: "getBankInfoByID") {
            account_number
            routing_number
            store_id
        }
    }
`;

export const GET_CARD_INFO_BY_USER_ID = gql`
    query MyQuery($account_id: Int!) {
        getCardInfoByUserId(account_id: $account_id, name: "getCardInfoByUserId") {
            card_number
            cvc
            month
            name_on_card
            year
        }
    }
`;

export const GET_ITEM_BY_ID = gql`
    query MyQuery($id: ID!) {
        getItemById(id: $id, name: "getItemById") {
            barcode_id
            item_brand
            item_name
            item_weight
        }
    }
`;

export const GET_ITEMS_FOR_STORE_BY_GROCER_ID = gql`
    query MyQuery($grocer_id: Int!) {
        getItemsForStoreByGrocerId(grocer_id: $grocer_id, name: "getItemsForStoreByGrocerId") {
            barcode_id
            item_aisle
            item_brand
            item_name
            item_price
            item_weight
            quantity
        }
    }
`;

export const GET_SHOPPING_LISTS_BY_USER_ID = gql`
    query MyQuery($id: Int!) {
        getShoppingListsByUserId(name: "getShoppingListsByUserId", id: $id) {
        items {
            barcode_id
            # item_aisle
            # item_brand
            # item_name
            # item_price
            # item_wieght
            # quantity
        }
        shopping_list_id
        # user {
        #   account_id
        #   email
        #   first_name
        #   last_name
        # }
        }
    }
`;

export const GET_SHOPPING_STATE_BY_ID = gql`
    query MyQuery($state_id: ID!) {
        getShoppingStateById(name: "getShoppingStateById", state_id: $state_id) {
            state_id
            state_name
        }
    }
`;

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

export const GET_USER_PASSWORD_BY_USER_ID = gql`
    query MyQuery($id: Int!) {
        getUserPasswordById(account_id: $id, name: "getUserPasswordById") {
            password
        }
    }
`;

export const IS_CUSTOMER = gql`
    query MyQuery($account_id: Int!) {
        isCustomer(account_id: $account_id, name: "isCustomer") {
            authorized
        }
    }
`;