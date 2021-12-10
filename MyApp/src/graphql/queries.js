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

export const GET_CUSTOMER_BY_ID = gql`
  query MyQuery($id: ID!) {
    getUserById(name: "getUserById", id: $id) {
      account_id
      email
      first_name
      last_name
    }
  }
`;

export const GET_GROCER_BY_ID = gql`
  query MyQuery($id: ID!) {
    getUserById(id: $id, name: "getUserById") {
      account_id
      email
      balance
      address
      grocer_name
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

export const GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID = gql`
  query MyQuery($shopping_session_id: Int!) {
    getItemsForShoppingSessionById(
      name: "getItemsForShoppingSessionById"
      shopping_session_id: $shopping_session_id
    ) {
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

export const GET_ITEMS_FOR_STORE_BY_GROCER_ID = gql`
  query MyQuery($grocer_id: Int!) {
    getItemsForStoreByGrocerId(
      grocer_id: $grocer_id
      name: "getItemsForStoreByGrocerId"
    ) {
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

export const GET_NEWEST_SHOPPING_SESSION_BY_USER_ID = gql`
    query MyQuery($account_id: Int!) {
        getNewestShoppingSessionByUserId(name: "getNewestShoppingSessionByUserId", account_id: $account_id) {
        account_id
        shopping_session_id
        state_id
        store_id
        }
    }
`;

export const GET_SHOPPING_LIST_CART_BY_ID = gql`
    query MyQuery($id:ID!){
        getShoppingListCartByID(account_id: $id, name: "getShoppingListCartByID") {
            message
        }     
    }
`;

export const GET_SHOPPING_LISTS_BY_USER_ID = gql`
  query MyQuery($id: ID!) {
    getShoppingListsByUserId(name: "getShoppingListsByUserId", id: $id) {
      items {
        barcode_id
        item_aisle
        item_brand
        item_name
        item_price
        # item_wieght
        quantity
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

export const GET_SHOPPING_SESSION_BY_ID = gql`
  query MyQuery($shopping_session_id: Int!) {
    getShoppingSessionById(
      name: "getShoppingSessionById"
      shopping_session_id: $shopping_session_id
    ) {
      account_id
      shopping_session_id
      state_id
      store_id
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
