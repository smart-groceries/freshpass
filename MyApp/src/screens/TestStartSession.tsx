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

const TestStartSession = ({navigation}: CartProp) => {
  const [shoppingSessionId, setshoppingSessionId] = useState("1");
  return (
      <TouchableOpacity
          onPress={() => {navigation.navigate('CartView', {info: { shoppingSessionId}})}}
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
            Go to Session
          </Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  checkOut: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    left: 25,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-Regular',
  }
});

export default TestStartSession;
