import RNBounceable from '@freakycoder/react-native-bounceable';
import * as React from 'react';
import {FC} from 'react';
import NumericInput from 'react-native-numeric-input';
import {
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  Text,
  Alert
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useMutation} from '@apollo/client';
import getImageUrl from '../utils/images';
import { UPDATE_ITEM_IN_SHOPPING_SESSION } from '../graphql/mutations';

interface GroceryItemDetails {
  name: string;
}

interface Props{
    shoppingSessionIdProp: string    
    itemIdProp: string
    nameProp: string
    weightProp: string
    brandProp: string
    priceProp: number
    aisleProp: string
    quantityProp: number
    removeFunction: any
    updateTotalFunction: any
}

const Item :FC<Props> = ({shoppingSessionIdProp, itemIdProp, nameProp, weightProp, brandProp, priceProp, aisleProp, quantityProp, removeFunction, updateTotalFunction}) => {
    const [itemId, setItemId] = React.useState(itemIdProp);
    const [name, setName] = React.useState(nameProp);
    const [weight, setWeight] = React.useState(weightProp);
    const [brand, setBrand] = React.useState(brandProp);
    const [price, setPrice] = React.useState(priceProp);
    const [aisle, setAisle] = React.useState(aisleProp);
    const [quantityValue, setQuantityValue] = React.useState(quantityProp);
    const [imageUrl, setImageUrl] = React.useState("");
    const [pushUpdate, setPushUpdate] = React.useState(false);
    const [mutateFunction, {data, loading, error}] = useMutation(UPDATE_ITEM_IN_SHOPPING_SESSION, {
        onError: err => {
          console.log(err);
        },
    });

    React.useEffect(() => {
        updateTotalFunction(itemId, quantityValue);
        if (quantityValue == 0) {
            removeFunction(itemId)
        }
          try {
            mutateFunction({
              variables: {
                barcode_id: itemId,
                field_name: "quantity",
                new_value: quantityValue,
                shopping_session_id: shoppingSessionIdProp,
              },
            });
          } catch {}
          while (loading) { }
          if (error) {
            console.log(error);
          }
      }, [quantityValue]);

      
      React.useEffect(() => {
        getImageUrl("item", itemId)
        .then(urlData => {
          setImageUrl(urlData.toString());
        }
        )
      }, []);

    return(
        <View style={styles.GroceryItemContainer}>
                <View style={styles.LeftContainer} >
                    <Text style={styles.itemTitle}>{name}</Text>
                    <Text style={styles.itemBrand}>{brand}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.itemPrice}>$</Text>
                        <Text style={styles.itemPrice}>{price}</Text>
                        <Text style={styles.itemPriceDivider}> • </Text>
                        <Text style={styles.itemAisle}>Aisle </Text>
                        <Text style={styles.itemAisle}>{aisle} </Text>
                    </View>
                    <View style ={styles.QuantityButtonContainer}>
                        <NumericInput value={quantityValue} onChange={
                            value => setQuantityValue(value)
                        
                        } totalHeight= {35} totalWidth= {90}
                        rounded
                        rightButtonBackgroundColor='#EEEEEE' 
                        leftButtonBackgroundColor='#EEEEEE'
                        textColor='#424347'
                        minValue={0}
                         />
                        {/* <NumericInput 
                                value={quantityValue}
                                onChange={value => setQuantityValue(value)} 
                                onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                totalWidth={240} 
                                totalHeight={50} 
                                iconSize={25}
                                step={1.5}
                                valueType='real'
                                rounded 
                                textColor='#B0228C' 
                                iconStyle={{ color: 'white' }} 
                                rightButtonBackgroundColor='#EA3788' 
                                leftButtonBackgroundColor='#E56B70'/> */}
        </View>
        <View style={styles.ItemControllerContainer}>
          {/* <TouchableHighlight>
                            <Image resizeMode='contain' source={require('./assets/filter_icon.png')}/>
                        </TouchableHighlight> */}
                    </View> 
                </View>
                <View style={styles.ItemPicContainer}>
                    <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{uri: imageUrl}}>
                    </Image>
                </View>
        </View>
  );
};

export default Item;

const styles = StyleSheet.create({
    GroceryItemContainer:{
        width:"100%",
        backgroundColor:'transparent',
        padding:20,
        flexDirection:'row',
        fontFamily: 'VarelaRound-Regular',
        marginVertical: 5,
    },
    ItemControllerContainer:{
        backgroundColor:'transparent',
        flexDirection:'row',
    },
    QuantityButtonContainer:{
        backgroundColor:'transparent',
        flexDirection:"row",
        fontFamily: 'VarelaRound-Regular',
    },
    LeftContainer:{
      flex:1,  
      backgroundColor:'transparent',
      fontFamily: 'VarelaRound-Regular',
      paddingVertical: 10,
      paddingBottom: 10
    },
    priceContainer:{
        backgroundColor:'transparent',
        flexDirection:"row",
        fontFamily: 'VarelaRound-Regular',
        marginTop: 4,
        paddingBottom: 10  
    },
    ItemPicContainer:{
        flex:1,
        alignContent:'flex-end',
        justifyContent:'flex-end',
        backgroundColor:'transparent',
    },
    image:{
        flex:1,
        width: 125,
        height: 125,
        alignSelf:'flex-end'
    },
    itemTitle: {
        fontSize: 16,
        color: '#424347',
        fontFamily: 'VarelaRound-Regular'
    },
    itemBrand: {
        fontSize: 13,
        color: '#BBBBBB',
        fontFamily: 'VarelaRound-Regular',
        marginTop: 4
    },
    itemPrice: {
        fontSize: 14,
        color: '#424347',
        fontFamily: 'VarelaRound-Regular'
    },
    itemPriceDivider: {
        fontSize: 14,
        color: '#D8D8D8',
        fontFamily: 'VarelaRound-Regular'
    },
    itemAisle: {
        fontSize: 14,
        color: '#E89023',
        fontFamily: 'VarelaRound-Regular'
    }
});