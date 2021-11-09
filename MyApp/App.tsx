/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  ImageComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Route,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ForgotPasswordScreen from './src/screens/ForgotPassword';
import CreateAccountScreen from './src/screens/CreateAccount';
import LoginScreen from './src/screens/LoginScreen';
import ShoppingLists from './src/screens/ShoppingLists';
import NavBar from './src/components/NavBar';
import {createStackNavigator} from '@react-navigation/stack';
import Payments from './src/screens/Payments';
import AddPayment from './src/screens/AddPayment';
import CartView from './src/screens/CartView';
import EditItem from './src/screens/EditItem';
import {AppRegistry} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LandingPage from './src/screens/LandingPage';
import HomePage from './src/screens/HomePage';
import RNBounceable from '@freakycoder/react-native-bounceable';
import AccountScreen from './src/screens/Account';
import PaymentConfirmation from './src/screens/PaymentConfirmation';
import OrderRejected from './src/screens/OrderRejected';
import {MenuProvider} from 'react-native-popup-menu';
// import GrocerAccountScreen from './src/screens/GrocerAccount';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/navigation/RootStackParamList';
import EditAccountInfoScreen from './src/screens/EditAccountInfo';

import { useQuery, ApolloProvider, ApolloClient, gql } from '@apollo/client';
import AppSyncConfig from './src/graphql/AppSyncConfig.js';
import { ApolloLink } from 'apollo-link';
import { createAuthLink } from 'aws/appsync/auth-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import { TEST_QUERY } from './src/graphql/queries';

const url = AppSyncConfig.ApiUrl;
const region = AppSyncConfig.Region;
const auth = {
    type: 'API_KEY',
    apiKey: AppSyncConfig.ApiKey
};

const link = ApolloLink.from([
    createAuthLink({ url, region, auth }), 
    createHttpLink({ uri: url })
]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})



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

      <Tab.Screen name="Stores" component={HomePage} />

      <Tab.Screen name="Lists" component={ShoppingLists} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

// export type Props = NativeStackScreenProps<stackParamList, 'Landing'>;

export default function App() {
  return (
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
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
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
