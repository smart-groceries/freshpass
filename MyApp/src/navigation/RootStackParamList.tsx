export type RootStackParamList = {
  Home: undefined;
  // {
  //   user: {
  //     id: number;
  //     email: string;
  //     fname: string;
  //     lname: string;
  //   };
  // };
  Landing: undefined;
  Login: undefined;
  Create: undefined;
  Forgot: undefined;
  PaymentConfirm: undefined;
  Catalog: {
    grocer: {
      account_id: number;
      email: string;
      balance: number;
      address: string;
      grocer_name: string;
    };
  }
  Account: {
    user: {
      id: number;
      email: string;
      fname: string;
      lname: string;
    };
  };
  
  EditAccount: {
    user: {
      id: number;
      email: string;
      fname: string;
      lname: string;
    };
  };

  GrocerCatalogItem: {
    item: {
      storeId: number
      id: string
      name: string
      weight: string
      brand: string
      price: number
      aisle: string
      quantity: number
    }
  };

  EditItem: {
    item: {
      storeId: number
      id: string
      name: string
      weight: string
      brand: string
      price: number
      aisle: string
      quantity: number
    }
  };
  PaymentMethods: {
    user: {
      id: number;
      email: string;
      fname: string;
      lname: string;
    };
  };
  
  AddPayment: {
    user: {
      id: number;
      email: string;
      fname: string;
      lname: string;
    };
  };
  
  OrderRejected: undefined;
  CartView: undefined;
  
  Lists: {
    user: {
      id: number;
      email: string;
      fname: string;
      lname: string;
    };
  };
  
  ListInfo: {
    info: {
      data: [];
    }
  };

AddItem: {
  grocer_id: number;
}

  ShoppingListView:undefined;
  
  ChangePassword: {
    user: {
      id: number;
      email: string;
      fname: string;
      lname: string;
      password: string;
    };
  };
  StoreLocator: undefined;
  PasswordResetLinkSent: undefined;
  StoreHome: {
    grocer: {
      account_id: number;
      email: string;
      balance: number;
      address: string;
      grocer_name: string;
    };
  };
};
