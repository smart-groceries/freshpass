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
  Alert,
  TouchableOpacity
} from 'react-native';
import {useMutation} from '@apollo/client';
import getImageUrl from '../utils/images';
import { ADD_ITEM_TO_SHOPPING_SESSION } from '../graphql/mutations';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';


interface Props{
    itemIdProp: string
    nameProp: string
    weightProp: string
    brandProp: string
    priceProp: number
    aisleProp: string
    shoppingSessionId: string
    navigateFunction: any
}

const BasicGroceryItem :FC<Props> = ({itemIdProp, nameProp, weightProp, brandProp, priceProp, aisleProp, shoppingSessionId, navigateFunction}) => {
    const [itemId, setItemId] = React.useState(itemIdProp);
    const [name, setName] = React.useState(nameProp);
    const [weight, setWeight] = React.useState(weightProp);
    const [brand, setBrand] = React.useState(brandProp);
    const [price, setPrice] = React.useState(priceProp);
    const [aisle, setAisle] = React.useState(aisleProp);
    const [imageUrl, setImageUrl] = React.useState(""); 
    const [tapped, setTapped] = React.useState(false);
    const [addFunction, addItemResult] = useMutation(ADD_ITEM_TO_SHOPPING_SESSION, {
        onError: err => {
          console.log(err);
        },
    });

    const addItem = () => { 
        try {
          addFunction({
            variables: {
              barcode_id: itemId,
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

    React.useEffect(() => {
    getImageUrl("item", itemId)
    .then(urlData => {
        setImageUrl(urlData.toString());
        console.log(imageUrl);
    }
    )
    }, []);

    React.useEffect(() => {
        if (tapped) {
            addItem();
            navigateFunction();
        }
    }, [tapped]);

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
                    <View style ={styles.AddButtonContainer}>
                        <TouchableOpacity style={styles.addButton}
                                  onPress={ () => {setTapped(true)}}>
                            <Text style={styles.addButtonText}>Add Item</Text>
                        </TouchableOpacity>
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

export default BasicGroceryItem;

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
    AddButtonContainer:{
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
    },
    addButton: {
        backgroundColor: '#F3F3F3',
        width: 96,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        fontFamily: 'VarelaRound-Regular'
    },
    addButtonText: {
        fontSize: 14,
        color: '#BBBBBB',
        fontFamily: 'VarelaRound-Regular'
    }
});