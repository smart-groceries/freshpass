export type RootStackParamList = {
  Home: undefined;
  Landing: undefined;
  Login: undefined;
  Create: undefined;
  Forgot: undefined;
  PaymentConfirm: undefined;
  Account: undefined;
  EditAccount: undefined;
  PaymentMethods:
    | {
        paymentInfo: {
          name: string;
          nameValidated: boolean;
          number: string;
          numberValidated: boolean;
          month: string;
          monthValidated: boolean;
          year: string;
          yearValidated: boolean;
          cvc: string;
          cvcValidated: boolean;
          default: boolean;
          validated: boolean;
        };
      }
    | undefined;
  AddPayment: undefined;
  OrderRejected: undefined;
  CartView: undefined;
  Lists: undefined;
  ChangePassword: undefined;
  StoreLocator: undefined;
};
