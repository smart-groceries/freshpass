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

  EditItem: {
    item: {
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
