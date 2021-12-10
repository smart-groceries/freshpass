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
  PaymentConfirm: {
    info: {
      shoppingSessionId: any;
    };
  };
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
  Catalog: {
    grocer:{
      account_id: number;
      email: string;
      balance: number;
      address: string;
      grocer_name: string;
    }
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
  OrderRejected: {
    info: {
      shoppingSessionId: any;
    };
  };
  OrderPending: {
    info: {
      shoppingSessionId: any;
    };
  };
  GrocerOrderCompletion: {
    info: {
      shoppingSessionId: any;
    };
  };
  CartView: {
    info: {
      shoppingSessionId: string;
    };
  };
  EmployerCartView: {
    info: {
      shoppingSessionId: string;
    };
  };
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
    };
  };
  AddItemSelectionScreen: {
    info: {
      grocerId: string;
      listOfItems: any;
      shoppingSessionId: string;
      isGrocer: boolean;
    };
  };
  ShoppingListView: {
    info: {
      shoppingListId: string;
    };
  };
  AddItem: {
    grocer_id: number;
  };

  
  ChangePassword: {user: {id: number; password: string}};

  StoreLocator: undefined;
  PasswordResetLinkSent: undefined;
  StoreHome: undefined;
  StoreAccount: {
    grocer: {
      account_id: number;
      email: string;
      balance: number;
      address: string;
      grocer_name: string;
    };
  };
  Scanner: undefined;
  EditStoreAccount: {
    grocer: {
      account_id: number;
      email: string;
      balance: number;
      address: string;
      grocer_name: string;
    };
  };
  Bank: {
    grocer: {
      account_id: number;
      email: string;
      balance: number;
      address: string;
      grocer_name: string;
    };
  };
  AddBank: {
    grocer: {
      account_id: number;
      email: string;
      balance: number;
      address: string;
      grocer_name: string;
    };
  };
};

