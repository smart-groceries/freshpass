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
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ForgotPasswordScreen from './src/screens/ForgotPassword';
import CreatAccountScreen from './src/screens/CreateAccount';
import LoginScreen from './src/screens/LoginScreen'
import ShoppingLists from './src/screens/ShoppingLists';
import NavBar from './src/components/NavBar';
import { createStackNavigator } from '@react-navigation/stack';
import Payments from './src/screens/Payments';
import AddPayment from './src/screens/AddPayment';
import CartView from './src/screens/CartView';
import EditItem from './src/screens/EditItem';
// import { AppRegistry } from 'react-native';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// // Initialize Apollo Client
// const client = new ApolloClient({
//   uri: 'localhost:4000/graphql',
//   cache: new InMemoryCache()
// });

const StoreStack = createStackNavigator();

function StoreStackScreen() {
  
  return (
    <StoreStack.Navigator
    screenOptions={{
      headerShown:false
    }}>
      <StoreStack.Screen name="Home" component={AddPayment} />
    </StoreStack.Navigator>
  );
}

const AccountStack = createStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator
    screenOptions={{
      headerShown:false
    }}>
      <AccountStack.Screen name="Account" component={Payments} />
    </AccountStack.Navigator>
  );
}

const ShoppingListsStack = createStackNavigator();

function ShoppingListsStackScreen() {
  return(
    <ShoppingListsStack.Navigator
    screenOptions={{
      headerShown:true
    }}
    >
      <ShoppingListsStack.Screen name ="Cart" component = {CartView}/>
    </ShoppingListsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Tab.Screen name="Account" 
          component={StoreStackScreen}
          // options= {{
          //   tabBarButton: (props) =><NavBar/>,
          // }}
        />
        
        <Tab.Screen name="Settings" 
          component={AccountStackScreen}
          // options= {{
          //   tabBarButton: (props) => <NavBar/>
          // }} 
        />

        <Tab.Screen name="Shopping Lists" 
          component={ShoppingListsStackScreen}
          // options= {{
          //   tabBarButton: (props) => <NavBar/>
          // }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
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
});