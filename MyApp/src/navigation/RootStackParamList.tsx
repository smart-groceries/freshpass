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
    }
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
    }
  };
  OrderPending: {
    info: {
      shoppingSessionId: any;
    }
  };
  CartView: {
    info: {
      shoppingSessionId: string;
    }
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
      name: string;
    };
  };
  AddItemSelectionScreen: {
    info: {
      grocerId: string;
      listOfItems: any;
      shoppingSessionId: string;
    }
  };
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
};
