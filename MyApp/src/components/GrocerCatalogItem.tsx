import RNBounceable from '@freakycoder/react-native-bounceable';
import * as React from 'react';
import {FC} from 'react';
import NumericInput from 'react-native-numeric-input';
import getImageUrl from '../utils/images';
import {NavigationContainer} from '@react-navigation/native';

import {
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  Text,
  Button,
  Alert,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GET_CARD_INFO_BY_USER_ID} from '../graphql/queries';

interface GroceryItemDetails {
  name: string;
}

interface Props{    
    idProp: string
    nameProp: string
    weightProp: string
    brandProp: string
    priceProp: number
    aisleProp: string
    quantityProp: number
    navigation: StackNavigationProp<RootStackParamList, 'EditItem'>;
    route: RouteProp<RootStackParamList, 'EditItem'>;
}

const Item :FC<Props> = ({idProp, nameProp, weightProp, brandProp, priceProp, aisleProp, quantityProp, navigation}) => {
    const [item,setItem] = React.useState({
        id: idProp,
        name: nameProp,
        weight: weightProp,
        brand: brandProp,
        price: priceProp,
        aisle: aisleProp,
        quantity: quantityProp,
    });
    const [imageUrl, setImageUrl] = React.useState("");

    React.useEffect(() => {
      getImageUrl("item", item.id)
      .then(data => {
        const result = data;
        setImageUrl(result.toString());
        console.log(imageUrl);
      }
      )
    }, []);
    console.log(item);
    return(
        <View style={styles.GroceryItemContainer}>
                <View style={styles.LeftContainer} >
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemBrand}>{item.brand}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.itemPrice}>$</Text>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                        <Text style={styles.itemPriceDivider}> • </Text>
                        <Text style={styles.itemAisle}>Aisle </Text>
                        <Text style={styles.itemAisle}>{item.aisle} </Text>
        </View>
        <Button
        onPress={() => navigation.navigate('EditItem',{item})}
        title="Edit Item"
        />

        <View>
          {/* <TouchableHighlight>
                            <Image resizeMode='contain' source={require('./assets/filter_icon.png')}/>
                        </TouchableHighlight> */}
        </View>  
        </View>
                <View style={styles.ItemPicContainer}>
                    <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={{uri: imageUrl}}/>
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