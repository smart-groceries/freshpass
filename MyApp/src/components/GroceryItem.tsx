import RNBounceable from '@freakycoder/react-native-bounceable';
import * as React from 'react';
import { FC } from 'react';
import NumericInput from 'react-native-numeric-input';


import {
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  Text,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface GroceryItemDetails {
    name: string
}

interface Props{    
    //cartDetails: GroceryItemDetails
}

const Item :FC<Props> = () => {
    const [name, setName] = React.useState("Mac and Cheese");
    const [weight, setWeight] = React.useState("0.5");
    const [brand, setBrand] = React.useState("Kraft");
    const [price, setPrice] = React.useState(".99");
    const [aisle, setAisle] = React.useState("1");
    const [imageUrl, setimageUrl] = React.useState("https://smart-grocery-project.s3.us-west-1.amazonaws.com/item-1.jpeg");
    const [quantityValue, setQuantityValue] = React.useState<number>(0);

    

    return(
        <View style={styles.GroceryItemContainer}>
                <View style={styles.LeftContainer} >
                    <Text style={styles.itemTitle}>{name}</Text>
                    <Text style={styles.itemBrand}>{brand}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.itemPrice}>$ </Text>
                        <Text style={styles.itemPrice}>{price}</Text>
                        <Text style={styles.itemPriceDivider}> • </Text>
                        <Text style={styles.itemAisle}>Aisle 1</Text>
                    </View>
                    <View style ={styles.QuantityButtonContainer}>
                        <NumericInput value={quantityValue} onChange={value => setQuantityValue(value)} totalHeight= {30} totalWidth= {70}
                        rounded 
                         />
                        {/* <NumericInput 
                                value={quantityValue} s
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
    )
}

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