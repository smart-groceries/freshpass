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
  FlatList,
} from 'react-native';
import FilterIcon from '../components/Filter';
import AddIcon from '../components/Add';
import SearchBar from '../components/SearchBar';
import GroceryItem from '../components/GroceryItem';
import NumericInput from 'react-native-numeric-input';
import {useQuery} from '@apollo/client';
import {GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID, GET_ITEM_BY_ID} from '../graphql/queries';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { RouteProp } from '@react-navigation/native';

export interface ListProp {
    navigation: StackNavigationProp<RootStackParamList, 'ShoppingListView'>;
    route: RouteProp<RootStackParamList, 'ShoppingListView'>;
    style?: ViewStyle | Array<ViewStyle> | undefined;
}

const ShoppingListView = ({navigation,route}:ListProp) => {
  const [shoppingSessionId, setshoppingSessionId] = useState("1");
  const [empty, setEmpty] = useState(true);
  const [orderComplete, setOrderComplete] = useState(false);
  const [listOfItems, setlistOfItems] = React.useState(route.params);
  console.log('Inside Shopping List View')  
  console.log(route.params)
  const renderItem = (data :any) => (
    <GroceryItem
    idProp={console.log("DATA "+data)}
    nameProp={data.item_name}
    weightProp={data.item_weight}
    brandProp={data.item_brand}
    priceProp={data.item_price}
    aisleProp={data.item_aisle}
    quantityProp={data.quantity}
    key={data.barcode_id}> 
    </GroceryItem>
  );

  return (  
    <View style={styles.screen}>
      <View style={styles.sectionContainer}>
        <SearchBar
          placeholder="Search"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}></SearchBar>
        <AddIcon></AddIcon> 
      </View>
      <FlatList 
        data={route.params}
        renderItem={renderItem}
      >
      </FlatList>
      <TouchableOpacity
          onPress={() => {Alert.alert(
            "Confirm Order",
            "Please confirm that all items in your cart are correct and that you would like to check out",
            [
              {
                text: "Go back",
              },
              {
                text: "Confirm",
                onPress: () => {
                  setOrderComplete(true);
                }
              }
            ]);}}
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
            Check Out
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
  text: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 40,
    color: '#424347',
    lineHeight: 48,
    letterSpacing: -1,
    left: '6.4%',
    top: '20%',
  },
  sectionContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
  },
  _container: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
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
  },
});

export default ShoppingListView;
