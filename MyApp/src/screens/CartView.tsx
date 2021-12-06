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
import {useQuery} from '@apollo/client';
import {GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID} from '../graphql/queries';

export interface CartProp {
  style?: ViewStyle | Array<ViewStyle> | undefined;
}

const CartView = () => {
  const [shoppingSessionId, setshoppingSessionId] = useState("1");
  const [empty, setEmpty] = useState(true);
  const [listOfItems, setlistOfItems] = useState([
    {barcode_id: '', item_aisle: '', item_brand: '', item_name: '', item_price: '', item_weight: '', quantity: 0},
  ]);
  const {error, loading, data, refetch} = useQuery(GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID, {
    variables: {shopping_session_id: shoppingSessionId},
  });


  useEffect(() => {
    if (data?.getItemsForShoppingSessionById[0] == undefined) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setlistOfItems(data.getItemsForShoppingSessionById);
      console.log(data.getItemsForShoppingSessionById);
    }
  }, [data]);

  const getListOfItems = () => {
    console.log(listOfItems)
    console.log("printing first item")
    console.log(listOfItems[0])
    console.log("printing second item")
    console.log(listOfItems[1])
    console.log("printing third item")
    console.log(listOfItems[2])
    return listOfItems.map(function (method, i) {
      console.log("method");
      console.log(method);
      console.log("key");
      console.log(i);
      console.log(method.barcode_id);
      console.log(method.item_name);
      console.log(method.item_weight);
      console.log(method.item_brand);
      console.log(method.item_price);
      console.log(method.quantity);
      return (
        <GroceryItem 
            idProp={method.barcode_id}
            nameProp={method.item_name}
            weightProp={method.item_weight}
            brandProp={method.item_brand}
            priceProp={method.item_price}
            aisleProp={method.item_aisle}
            quantityProp={method.quantity}
            key={i+1}
        >
        </GroceryItem>
      );
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.sectionContainer}>
        <SearchBar
          placeholder="Search"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}></SearchBar>
        <AddIcon></AddIcon>
        <FilterIcon></FilterIcon>
      </View>
      
      <ScrollView contentContainerStyle={styles._container}>
        {getListOfItems()}
      </ScrollView>
      <TouchableOpacity
          onPress={() => console.log("Hello")}
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

export default CartView;
