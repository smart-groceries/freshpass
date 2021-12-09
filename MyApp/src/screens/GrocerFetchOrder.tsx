import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  ScrollViewBase,
  ViewStyle,
  Alert,
} from 'react-native';
import FilterIcon from '../components/Filter';
import AddIcon from '../components/Add';
import SearchBar from '../components/SearchBar';
import GroceryItem from '../components/GroceryItem';
import NumericInput from 'react-native-numeric-input';
import {useQuery, useMutation} from '@apollo/client';
import {GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID} from '../graphql/queries';
import {REMOVE_ITEM_IN_SHOPPING_SESSION, ADD_ITEM_TO_SHOPPING_SESSION, UPDATE_ITEM_IN_STORE_CATALOG} from '../graphql/mutations';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootStackParamList';

export interface CartProp {
  style?: ViewStyle | Array<ViewStyle> | undefined;
  navigation: StackNavigationProp<RootStackParamList, 'Confirmation'>;
}

const GrocerFetchOrder = ({navigation}: CartProp) => {
  const [shoppingSessionId, setshoppingSessionId] = useState();
  return (
      <View style={styles.screen}>
          <Text style={styles.headerText}>Validate Customer Order</Text>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              This screen will allow you to validate the items inside a customer's order.
              Please enter in the customer's order number to start.
            </Text>
        </View>
        <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Order Number:</Text>
        <TextInput
          style={styles.dataTextInput}
          onChangeText={val => {
            setshoppingSessionId(val);
          }}>
          {shoppingSessionId}
        </TextInput>
      </View>
      <TouchableOpacity
          onPress={() => {navigation.navigate('EmployerCartView', {info: { shoppingSessionId}})}}
          style={[
            styles.checkOut,
            {
              backgroundColor: '#E89023',
              margin: 10,
            },
          ]}>
              <Text
            style={[
              styles.textButton,
              {
                color: '#FFFFFF',
              },
            ]}>
            View Order
          </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    color: '#E89023',
    fontSize: 25,
    fontFamily: 'VarelaRound-Regular',
    marginTop: 120,
    alignSelf: 'center',
  },
  checkOut: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    left: 25,
  },
  paragraphContainer: {
    marginTop: 5,
    height: 175,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginHorizontal: 55,
  },
  paragraph: {
    fontSize: 15,
    fontFamily: 'VarelaRound-Regular',
    color: '#BBBBBB',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-Regular',
  },
  itemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '90%',
    height: 85,
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 25
  },
  itemText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
  },
  dataTextInput: {
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingHorizontal: 10,
    color: 'black',
    marginVertical: 10,
    height: 45
    // borderColor: '#999999',
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontSize: 20,
  },
});

export default GrocerFetchOrder;
