/**
 * Freshpass
 */
import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ForgotPasswordScreen from './src/screens/ForgotPassword';
import CreateAccountScreen from './src/screens/CreateAccount';
import LoginScreen from './src/screens/LoginScreen';
import ShoppingLists from './src/screens/ShoppingLists';
import OrderPending from './src/screens/OrderPending';
import {createStackNavigator} from '@react-navigation/stack';
import Payments from './src/screens/Payments';
import AddPayment from './src/screens/AddPayment';
import CartView from './src/screens/CartView';
import EmployerCartView from './src/screens/EmployerCartView';
import GrocerOrderCompletion from './src/screens/GrocerOrderCompletion';
import AddItemSelectionScreen from './src/screens/AddItemSelectionScreen';

import EditItem from './src/screens/EditItem';
import {AppRegistry} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LandingPage from './src/screens/LandingPage';
import HomePage from './src/screens/HomePage';
import AccountScreen from './src/screens/Account';
import PaymentConfirmation from './src/screens/PaymentConfirmation';
import OrderRejected from './src/screens/OrderRejected';
import {MenuProvider} from 'react-native-popup-menu';
// import GrocerAccountScreen from './src/screens/GrocerAccount';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/navigation/RootStackParamList';
import EditAccountInfoScreen from './src/screens/EditAccountInfo';
import StoreLocator from './src/screens/StoreLocator';
import ChangePasswordScreen from './src/screens/Change Password';
import StoreAccountScreen from './src/screens/StoreAccount';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';
// import { useQuery, ApolloProvider, ApolloClient, gql } from '@apollo/client';
import AppSyncConfig from './src/graphql/AppSyncConfig.js';
import {ApolloLink} from 'apollo-link';
import {createAuthLink} from 'aws-appsync-auth-link';
import {createHttpLink} from 'apollo-link-http';
// import { InMemoryCache } from "apollo-cache-inmemory";
import BackendConnector from './src/components/BackendConnector';
import PasswordLinkSent from './src/screens/PasswordLinkSent';
import ShoppingListView from './src/screens/ShoppingListView';
import GrocerCatalog from './src/screens/GrocerCatalog';
import BarcodeScanner from './src/screens/BarcodeScanner';
import EditStoreAccountScreen from './src/screens/EditStoreAccountInfo';
import BankAccountScreen from './src/screens/BankAccount';
import TestStartSession from './src/screens/TestStartSession';
import AddBankAccountScreen from './src/screens/AddBankAccount';
import GrocerFetchOrder from './src/screens/GrocerFetchOrder';
// import {StripeProvider} from '@stripe/stripe-react-native';

// home screens with nav bar
function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Stores"
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName = require('./src/assets/account_icon.png');
          if (route.name === 'Account') {
            iconName = require('./src/assets/account_icon.png');
          } else if (route.name === 'Stores') {
            iconName = require('./src/assets/stores_icon.png');
          } else if (route.name === 'Lists') {
            iconName = require('./src/assets/lists_icon.png');
          }
          return (
            <Image
              resizeMode="contain"
              source={iconName}
              style={styles.navIcons}></Image>
          );
        },
        headerShown: true,
        headerTitleStyle: {fontFamily: 'VarelaRound-Regular'},
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {fontFamily: 'VarelaRound-Regular'},
        tabBarActiveBackgroundColor: '#F3F3F3',
      })}>
      <Tab.Screen name="Account" component={AccountScreen} />

      <Tab.Screen name="Stores" component={StoreLocator} />

      <Tab.Screen
        name="Lists"
        component={ShoppingLists}
        options={{headerTitle: 'Shopping Lists'}}
      />
    </Tab.Navigator>
  );
}

function StoreHomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="StoreAccount"
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName = require('./src/assets/account_icon.png');
          if (route.name === 'Scanner') {
            iconName = require('./src/assets/barcode_icon.png');
          } else if (route.name === 'StoreAccount') {
            iconName = require('./src/assets/account_icon.png');
          } else if (route.name === 'Catalog') {
            iconName = require('./src/assets/lists_icon.png');
          }
          return (
            <Image
              resizeMode="contain"
              source={iconName}
              style={styles.navIcons}></Image>
          );
        },
        headerShown: true,
        headerTitleStyle: {fontFamily: 'VarelaRound-Regular'},
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {fontFamily: 'VarelaRound-Regular'},
        tabBarActiveBackgroundColor: '#F3F3F3',
      })}>
      <Tab.Screen
        name="StoreAccount"
        component={StoreAccountScreen}
        options={{headerTitle: 'Account', title: 'Account'}}
      />

      <Tab.Screen name="Scanner" component={BarcodeScanner} />

      <Tab.Screen
        name="Catalog"
        component={GrocerCatalog}
        options={{headerTitle: 'Shopping Lists'}}
      />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const client = BackendConnector();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MenuProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleStyle: {fontFamily: 'VarelaRound-Regular'},
            }}>
            <Stack.Screen
              name="Landing"
              component={LandingPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Create"
              component={CreateAccountScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Forgot"
              component={ForgotPasswordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ShoppingListView"
              component={ShoppingListView}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PaymentMethods"
              component={Payments}
              options={{headerShown: true, title: 'Payment Methods'}}
            />
            <Stack.Screen
              name="EditAccount"
              component={EditAccountInfoScreen}
              options={{headerShown: true, title: 'Account Information'}}
            />
            <Stack.Screen
              name="AddPayment"
              component={AddPayment}
              options={{headerShown: true, title: 'Add Payment'}}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePasswordScreen}
              options={{headerShown: true, title: 'Change Password'}}
            />
            <Stack.Screen
              name="PasswordResetLinkSent"
              component={PasswordLinkSent}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="StoreHome"
              component={StoreHomeTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditItem"
              component={EditItem}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditStoreAccount"
              component={EditStoreAccountScreen}
              options={{headerShown: true, title: 'Edit Account'}}
            />
            <Stack.Screen
              name="OrderRejected"
              component={OrderRejected}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OrderPending"
              component={OrderPending}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CartView"
              component={CartView}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddItemSelectionScreen"
              component={AddItemSelectionScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PaymentConfirm"
              component={PaymentConfirmation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Bank"
              component={BankAccountScreen}
              options={{title: 'Bank Account Information'}}
            />
            <Stack.Screen
              name="AddBank"
              component={AddBankAccountScreen}
              options={{
                headerShown: true,
                title: 'Add Bank Account Information',
              }}
            />
            <Stack.Screen
              name="EmployerCartView"
              component={EmployerCartView}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="GrocerOrderCompletion"
              component={GrocerOrderCompletion}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('MyApplication', () => App);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 40,
    color: '#424347',
    lineHeight: 48,
    letterSpacing: -1,
    left: '6.4%',
    top: '20%',
  },
  navIcons: {
    width: 25,
    height: 25,
  },
  navBar: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
