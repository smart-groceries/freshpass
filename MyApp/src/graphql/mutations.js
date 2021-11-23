import {gql} from '@apollo/client';

export const ADD_BANK_INFO = gql`
  mutation MyMutation(
    $account_number: Int!,
    $routing_number: Int!,
    $store_id: ID!
  ) {
    addBankInfo(
      account_number: $account_number,
      name: "addBankInfo",
      routing_number: $routing_number,
      store_id: $store_id
    ) {
        message
    }
  }
`;

export const ADD_CARD_INFO = gql`
  mutation addCardMutation(
    $account_id: Int!
    $card_number: String!
    $nameoncard: String!
    $month: Int!
    $year: Int!
    $cvc: Int!
  ) {
    addCardInfo(
      name: "addCardInfo"
      account_id: $account_id
      card_number: $card_number
      nameoncard: $nameoncard
      month: $month
      year: $year
      cvc: $cvc
    ) {
        message
    }
  }
`;

export const ADD_ITEM_TO_GROCERY = gql`
  mutation MyMutation(
    $barcode_id: ID!,
    $item_aisle: Float,
    $item_price: Float,
    $quantity: Int,
    $store_id: ID!
  ) {
    addItemToGrocery(
      barcode_id: $barcode_id,
      name: "addItemToGrocery",
      store_id: $store_id,
      item_aisle: $item_aisle,
      item_price: $item_price,
      quantity: $quantity
    ) {
        message
    }
  }
`;

export const ADD_ITEM_TO_SHOPPING_LIST = gql`
  mutation MyMutation(
    $barcode_id: ID!,
    $quantity: Int!,
    $shopping_list_id: ID!
  ) {
    addItemToShoppingList(
      barcode_id: $barcode_id,
      name: "addItemToShoppingList",
      quantity: $quantity,
      shopping_list_id: $shopping_list_id
    ) {
        message
    }
  }
`;

export const ADD_ITEM_TO_SHOPPING_SESSION = gql`
  mutation MyMutation(
    $barcode_id: ID!,
    $quantity: Int!,
    $shopping_session_id: ID!
  ) {
    addItemToShoppingSession(
      barcode_id: $barcode_id,
      name: "addItemToShoppingSession",
      quantity: $quantity,
      shopping_session_id: $shopping_session_id
    ) {
        message
    }
  }
`;

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

export const CREATE_NEW_ITEM = gql`
  mutation MyMutation(
    $barcode_id: ID!,
    $item_maker: String!,
    $item_name: String!,
    $item_weight: Float
  ) {
    createNewItem(
      barcode_id: $barcode_id,
      item_maker: $item_maker,
      item_name: $item_name,
      name: "createNewItem",
      item_weight: $item_weight
    ) {
        message
    }
  }
`;

export const CREATE_SHOPPING_SESSION = gql`
  mutation MyMutation(
    $account_id: ID!, 
    $store_id: ID!
  ) {
    createShoppingSession(
      account_id: $account_id,
      name: "createShoppingSession",
      store_id: $store_id
    ) {
        message
    }
  }
`;

export const DELETE_BANK_INFO = gql`
  mutation MyMutation(
    $account_number: Int!, 
    $routing_number: Int!
  ) {
    deleteBankInfo(
      account_number: $account_number,
      name: "deleteBankInfo", 
      routing_number: $routing_number
    ) {
        message
    }
  }
`;

export const DELETE_CARD_INFO = gql`
  mutation MyMutation(
    $card_number: String!
  ) {
    deleteCardInfo(
      card_number: $card_number,
      name: "deleteCardInfo"
    ) {
        message
    }
  }
`;

export const REMOVE_ITEM_BY_ID = gql`
  mutation MyMutation(
    $barcode_id: ID!
  ) {
    removeItemById(
      barcode_id: $barcode_id,
      name: "removeItemById"
    ) {
        message
    }
  }
`;

export const REMOVE_ITEM_IN_SHOPPING_LIST = gql`
  mutation MyMutation(
    $shopping_list_id: Int!,
    $barcode_id: String!
  ) {
    removeItemInShoppingList(
      barcode_id: $barcode_id,
      name: "removeItemInShoppingList",
      shopping_list_id: $shopping_list_id
    ) {
        message
    }
  }
`;

export const REMOVE_ITEM_IN_SHOPPING_SESSION = gql`
  mutation MyMutation(
      $barcode_id: String!,
      $shopping_session_id: Int!
    ) {
      removeItemInShoppingSession(
        barcode_id: $barcode_id,
        name: "removeItemInShoppingSession",
        shopping_session_id: $shopping_session_id
      ) {
          message
    }
  }
`;

export const REMOVE_ITEM_IN_STORE_CATALOG = gql`
  mutation MyMutation(
    $store_id: Int!,
    $barcode_id: String!
  ) {
    removeIteminStoreCatalog(
      barcode_id: $barcode_id,
      name: "removeIteminStoreCatalog",
      store_id: $store_id
    ) {
        message
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation MyMutation(
    $barcode_id: ID!,
    $field_name: String!,
    $new_value: String!
  ) {
    updateItem(
      barcode_id: $barcode_id,
      field_name: $field_name,
      name: "updateItem",
      new_value: $new_value
    ) {
        message
    }
  }
`;

export const UPDATE_ITEM_IN_SHOPPING_LIST = gql`
  mutation MyMutation(
    $barcode_id: Int!,
    $field_name: String!,
    $new_value: String!,
    $shopping_list_id: Int
  ) {
    updateItemInShoppingList(
      barcode_id: $barcode_id,
      field_name: $field_name,
      name: "updateItemInShoppingList",
      new_value: $new_value,
      shopping_list_id: $shopping_list_id
    ) {
        message
    }
  }
`;

export const UPDATE_ITEM_IN_SHOPPING_SESSION = gql`
  mutation MyMutation(
    $barcode_id: Int!,
    $field_name: String!,
    $new_value: String!,
    $shopping_session_id: Int!
  ) {
    updateItemInShoppingSession(
        barcode_id: $barcode_id,
        field_name: $field_name,
        name: "updateItemInShoppingSession",
        new_value: $new_value,
        shopping_session_id: $shopping_session_id
      ) {
          message
    }
  }
`;

export const UPDATE_ITEM_IN_STORE_CATALOG = gql`
  mutation MyMutation(
    $barcode_id: Int!,
    $field_name: String!,
    $new_value: String!,
    $store_id: Int!
  ) {
    updateIteminStoreCatalog(
      barcode_id: $barcode_id,
      field_name: $field_name, 
      name: "updateIteminStoreCatalog",
      new_value: $new_value, 
      tore_id: $store_id
    ) {
        message
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