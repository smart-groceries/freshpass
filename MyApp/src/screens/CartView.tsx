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
import {REMOVE_ITEM_IN_SHOPPING_SESSION} from '../graphql/mutations';

export interface CartProp {
  style?: ViewStyle | Array<ViewStyle> | undefined;
}

const CartView = () => {
  const [shoppingSessionId, setshoppingSessionId] = useState("1");
  const [empty, setEmpty] = useState(true);
  const [orderComplete, setOrderComplete] = useState(false);
  const [listOfItems, setlistOfItems] = useState([]);
  const getItemsResult = useQuery(GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID, {
    variables: {shopping_session_id: shoppingSessionId},
  });
  const [deleteFunction, removeItemsResult] = useMutation(REMOVE_ITEM_IN_SHOPPING_SESSION, {
      onError: err => {
        console.log(err);
      },
  });
  const [total, setTotal] = useState(0);


  useEffect(() => {
    if (getItemsResult.data?.getItemsForShoppingSessionById[0] == undefined) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setlistOfItems(getItemsResult.data.getItemsForShoppingSessionById);
      console.log(getItemsResult.data.getItemsForShoppingSessionById);
    }
  }, [getItemsResult.data]);


  const deleteItem = (id: any) => {
    console.log("START DELETE ITEM")
    console.log("listOfItems at beginning")
    console.log(listOfItems)
    console.log("KEY IS")
    console.log(id)
    var listOfItemsCopy = listOfItems;
    var position = 0;
    for (var element in listOfItemsCopy)  {
      console.log("ELEMENT IS")
      console.log(element)
      console.log("ELEMENT.BARCODEID IS")
      console.log(listOfItemsCopy[element].barcode_id)

      if (listOfItemsCopy[element].barcode_id == id){
        position = +element;
      }
    }
    console.log("POSITION IS")
    console.log(position)
    console.log("COPY BEFORE REMOVAL IS")
    console.log(listOfItemsCopy)
    listOfItemsCopy.splice(position,1);
    console.log("COPY AFTER REMOVAL IS")
    console.log(listOfItemsCopy)
    setlistOfItems(listOfItemsCopy);
    console.log(listOfItems);
    console.log("END DELETE ITEM")

    try {
      deleteFunction({
        variables: {
          barcode_id: id,
          shopping_session_id: shoppingSessionId,
        },
      });
    } catch {}
    while (removeItemsResult.loading) {}
    if (removeItemsResult.error) {
      console.log(removeItemsResult.error);
    }
  }


  const getListOfItems = () => {
    return listOfItems.map(function (item, i) {
      //console.log("KEY IS")
      //console.log(i)
      return (
          <GroceryItem
              shoppingSessionIdProp={shoppingSessionId}
              itemIdProp={item.barcode_id}
              nameProp={item.item_name}
              weightProp={item.item_weight}
              brandProp={item.item_brand}
              priceProp={item.item_price}
              aisleProp={item.item_aisle}
              quantityProp={item.quantity}
              removeFunction={deleteItem}
              key={item.barcode_id}
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
      </View>

      <ScrollView contentContainerStyle={styles._container}>
        {getListOfItems()}
      </ScrollView>  
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
                },
              },
            ]
          );}}
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
