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
import { GET_ALL_ITEMS, GET_ITEMS_FOR_STORE_BY_GROCER_ID } from '../graphql/queries';
import {useQuery} from '@apollo/client';
import GroceryItem from '../components/GroceryItem';

export interface GrocerCatalogProp {
    style?: ViewStyle | Array<ViewStyle> | undefined;
}


const GrocerCatalog = () => {
    const [storeId, setstoreId] = useState("5");
    const [catalogItemsList, setcatalogItemsList] = useState([
        {barcode_id: '', item_aisle: '', item_brand: '', item_name: '', item_price: 0, item_weight: '', quantity: 0 }
    ])
    const {error, loading, data, refetch} = useQuery(GET_ITEMS_FOR_STORE_BY_GROCER_ID, 
        {variables: {grocer_id: storeId},
    });
    const [empty, setEmpty] = useState(true);
    
    

useEffect(() => {
    if (data?.getItemsForStoreByGrocerId[0] == undefined) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setcatalogItemsList(data.getItemsForStoreByGrocerId);
    }
  }, [data]);


const getCatalogItemList = () => {
    return catalogItemsList.map(function (method, i){
        
        return (
            <GroceryItem
                key = {i}
                idProp = {method.barcode_id}
                nameProp = {method.item_name}
                weightProp = {method.item_weight}
                brandProp = {method.item_brand}
                priceProp = {method.item_price}
                aisleProp = {method.item_aisle}
                quantityProp = {method.quantity} >

            </GroceryItem>
        )
    })
}

return (<ScrollView contentContainerStyle={styles._container}>
    {getCatalogItemList()}
  </ScrollView>);

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

  export default GrocerCatalog;