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

const CartView = ({navigation}: CartProp) => {
  const [shoppingSessionId, setshoppingSessionId] = useState("1");
  const [grocerId, setGrocerId] = useState("5");
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
  const [addFunction, addItemResult] = useMutation(ADD_ITEM_TO_SHOPPING_SESSION, {
      onError: err => {
        console.log(err);
      },
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(orderComplete ==true)  {
      navigation.navigate('OrderRejected', {info: {shoppingSessionId}});
    }
  }, [orderComplete]);

  useEffect(() => {
    if (getItemsResult.data?.getItemsForShoppingSessionById[0] == undefined) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setlistOfItems(getItemsResult.data.getItemsForShoppingSessionById);
      console.log(getItemsResult.data.getItemsForShoppingSessionById);
    }
  }, [getItemsResult.data]);

  useEffect(() => {
    console.log("✅")
    var newTotal = 0
    for (var element in listOfItems)  {
      newTotal += (listOfItems[element].quantity) * (listOfItems[element].item_price);
    }
    newTotal = newTotal.toFixed(2);
    setTotal(newTotal);
  }, [listOfItems]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getItemsResult.refetch();
    });
    return unsubscribe;
  }, [navigation]);

  const updateQuantity = (id: any, newQuantity: number) => {
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

      if (listOfItemsCopy[element].barcode_id == id) {
        position = +element;
      }
    }
    console.log("POSITION IS")
    console.log(position)
    console.log("COPY BEFORE REMOVAL IS")
    console.log(listOfItemsCopy)
    listOfItemsCopy[position].quantity = newQuantity
    console.log("COPY AFTER REMOVAL IS")
    console.log(listOfItemsCopy)
    setlistOfItems(listOfItemsCopy);
    console.log(listOfItems);
    console.log("END DELETE ITEM")
  }

  const addItem = (
    id: any,
    aisle: string,
    brand: string,
    name: string,
    price: number,
    weight: string,
  ) => {
    var newItem = {
      __typename: "Item",
      barcode_id: id,
      item_aisle: aisle,
      item_brand: brand,
      item_name: name,
      item_price: price,
      item_weight: weight,
      quantity: 1
    }
    console.log("START ADD ITEM")
    console.log("listOfItems at beginning")
    console.log(listOfItems)
    console.log("KEY IS")
    console.log(id)
    var listOfItemsCopy = listOfItems;
    console.log("COPY BEFORE ADDITION IS")
    console.log(listOfItemsCopy)
    listOfItemsCopy.push(newItem);
    console.log("COPY AFTER REMOVAL IS")
    console.log(listOfItemsCopy)
    setlistOfItems(listOfItemsCopy);
    console.log(listOfItems);
    console.log("END ADD ITEM")

    try {
      addFunction({
        variables: {
          barcode_id: id,
          quantity: "1",
          shopping_session_id: shoppingSessionId,
        },
      });
    } catch {}
    while (addItemResult.loading) {}
    if (addItemResult.error) {
      console.log(addItemResult.error);
    }
  }

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
              updateTotalFunction={updateQuantity}
              key={item.barcode_id}
          >
          </GroceryItem>
      );
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.titleSectionContainer}>
          <Text style={styles.title}>Shopping Session</Text>
          <Text style={styles.instructionText}>Sample Text</Text>
      </View>
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
      <View style={styles.totalContainer}>
        <View style={styles.LeftContainer} >
            <Text style={styles.leftTotalAmount}>Total </Text>
        </View>
        <View style={styles.MiddleContainer}>
        </View>
        <View style={styles.RightContainer}>  
            <Text style={styles.dollarSignTotalAmount}>$ </Text>
            <Text style={styles.rightTotalAmount}>{total} </Text>
        </View>
      </View>
      <TouchableOpacity
          onPress={() => {navigation.navigate('AddItemSelectionScreen', {info: {grocerId, listOfItems, shoppingSessionId}})}}
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
            Add Item
          </Text>
        </TouchableOpacity>
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
  totalContainer:{
    backgroundColor:'transparent',
    flexDirection:"row",
    fontFamily: 'VarelaRound-Regular',
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 35,
    paddingRight: 35
  },
  LeftContainer:{
    flex:1,  
    backgroundColor:'transparent',
    fontFamily: 'VarelaRound-Regular'
  },
  MiddleContainer:{
    flexDirection:'row'
  },
  RightContainer:{
    flexDirection: 'row'
  },
  leftTotalAmount: {
      flex: 1,
      fontSize: 24,
      color: '#424347',
      fontFamily: 'VarelaRound-Regular',
  },
  dollarSignTotalAmount: {
    fontSize: 24,
    color: '#424347',
    fontFamily: 'VarelaRound-Regular'
  },
  rightTotalAmount: {
    fontSize: 24,
    color: '#424347',
    fontFamily: 'VarelaRound-Regular'
  },
  title: {
    marginTop: 60,
    fontSize: 32,
    color: '#424347',
    fontFamily: 'VarelaRound-Regular'
  },
  instructionText: {
    fontSize: 13,
    color: '#BBBBBB',
    fontFamily: 'VarelaRound-Regular',
    marginTop: 7,
    marginBottom: 7
  },
  titleSectionContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
  },
});

export default CartView;
