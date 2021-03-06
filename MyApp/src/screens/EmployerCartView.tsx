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
import AddIcon from '../components/AddShoppingSession';
import SearchBar from '../components/SearchBar';
import GroceryItem from '../components/GroceryItem';
import NumericInput from 'react-native-numeric-input';
import {useQuery, useMutation} from '@apollo/client';
import {GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID, GET_SHOPPING_SESSION_BY_ID, GET_GROCER_BY_ID} from '../graphql/queries';
import {REMOVE_ITEM_IN_SHOPPING_SESSION, ADD_ITEM_TO_SHOPPING_SESSION, UPDATE_ITEM_IN_STORE_CATALOG, UPDATE_SHOPPING_SESSION} from '../graphql/mutations';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootStackParamList';

export interface CartProp {
  style?: ViewStyle | Array<ViewStyle> | undefined;
  navigation: StackNavigationProp<RootStackParamList, 'CartView'>;
  route: RouteProp<RootStackParamList, 'CartView'>;
}

const CartView = ({route, navigation}: CartProp) => {
  const [shoppingSessionId, setshoppingSessionId] = useState(route.params.info.shoppingSessionId);
  const [grocerId, setGrocerId] = useState("5");
  const [empty, setEmpty] = useState(true);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDeny, setOrderDeny] = useState(false);
  const [orderApprove, setOrderApprove] = useState(false);
  const [listOfItems, setlistOfItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [grocer, setGrocer] = useState("");
  const [updateTotal, setUpdateTotal] = useState(false);
  const getItemsResult = useQuery(GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID, {
    variables: {shopping_session_id: shoppingSessionId},
    pollInterval: 1000
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
  const [setSessionStateFunction, setSessionStateFunctionResult] = useMutation(UPDATE_SHOPPING_SESSION, {
    onError: err => {
      console.log(err);
    },
  });
  const getGrocerResult = useQuery(GET_GROCER_BY_ID, {
    variables: {id: grocerId}
  });

  useEffect(() => {
    if (getGrocerResult.data?.getUserById == undefined) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setGrocer(getGrocerResult.data.getUserById);
    }
  }, [getGrocerResult.data]);

  useEffect(() => {
    if(orderComplete==true)  {
      if (orderDeny==true) {
        try {
          setSessionStateFunction({
            variables: {
              new_value: "3",
              field_name: "state_id",
              shopping_session_id: shoppingSessionId,
            },
          });
        } catch {}
        while (setSessionStateFunctionResult.loading) {}
        if (setSessionStateFunctionResult.error) {
          console.log(setSessionStateFunctionResult.error);
        }
      }

        if (orderApprove==true) {
          try {
            setSessionStateFunction({
              variables: {
                new_value: "4",
                field_name: "state_id",
                shopping_session_id: shoppingSessionId,
              },
            });
          } catch {}
          while (setSessionStateFunctionResult.loading) {}
          if (setSessionStateFunctionResult.error) {
            console.log(setSessionStateFunctionResult.error);
          }
        }
        navigation.navigate('GrocerOrderCompletion',{info: {shoppingSessionId}});
      }
  }, [orderComplete]);

  useEffect(() => {
    if (orderDeny==true) {
      setOrderComplete(true)
    }
  }, [orderDeny]);

  useEffect(() => {
    if (orderApprove==true) {
      setOrderComplete(true)
    }
  }, [orderApprove]);

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
    setUpdateTotal(true);
  }, [listOfItems]);

  useEffect(() => {
    if (updateTotal == true) {
      var newTotal = 0
      for (var element in listOfItems)  {
        newTotal += (listOfItems[element].quantity) * (listOfItems[element].item_price);
      }
      newTotal = +newTotal.toFixed(2);
      setTotal(newTotal);
    }
    setUpdateTotal(false);
  }, [updateTotal]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getItemsResult.refetch();
    });
    return unsubscribe;
  }, [navigation]);

  const updateQuantity = (id: any, newQuantity: number) => {
    var listOfItemsCopy = listOfItems;
    var position = 0;
    for (var element in listOfItemsCopy)  {
      if (listOfItemsCopy[element].barcode_id == id) {
        position = +element;
      }
    }
    listOfItemsCopy[position].quantity = newQuantity
    setlistOfItems(listOfItemsCopy);
    setUpdateTotal(true);
  }

  const navigateToAddScreen = () => {
    navigation.navigate('AddItemSelectionScreen', {info: {grocerId, listOfItems, shoppingSessionId, isGrocer: true}})
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
    var listOfItemsCopy = listOfItems;
    listOfItemsCopy.push(newItem);
    setlistOfItems(listOfItemsCopy);

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
    var listOfItemsCopy = listOfItems;
    var position = 0;
    for (var element in listOfItemsCopy)  {
      if (listOfItemsCopy[element].barcode_id == id){
        position = +element;
      }
    }
    listOfItemsCopy.splice(position,1);
    setlistOfItems(listOfItemsCopy);
    setUpdateTotal(true);

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
          <Text style={styles.title}>Cart</Text>
          <Text style={styles.instructionText}>{grocer.grocer_name} - {grocer.address}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <SearchBar
          placeholder="Search"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}></SearchBar>
        <AddIcon navigateToAddScreen={navigateToAddScreen}></AddIcon>
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
          onPress={() => {Alert.alert(
            "Confirm Order",
            "Please confirm that all items are correct and that you would like to charge the customer",
            [
              {
                text: "Go back",
              },
              {
                text: "Confirm",
                onPress: () => {
                  setOrderApprove(true);
                },
              },
            ]
          );}}
          style={[
            styles.checkOut,
            {
              backgroundColor: '#71BF61',
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
            Approve
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => {Alert.alert(
            "Confirm Rejection",
            "Please confirm that the order has been rejected.",
            [
              {
                text: "Go back",
              },
              {
                text: "Confirm",
                onPress: () => {
                  setOrderDeny(true);
                },
              },
            ]
          );}}
          style={[
            styles.checkOut,
            {
              backgroundColor: '#E89023',
              margin: 10,
              marginBottom: 60,
            },
          ]}>
              <Text
            style={[
              styles.textButton,
              {
                color: '#FFFFFF',
              },
            ]}>
            Deny
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
    marginBottom: 5
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
    fontSize: 42,
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
