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
  Lists: undefined;
  ChangePassword: undefined;
  StoreLocator: undefined;
};
