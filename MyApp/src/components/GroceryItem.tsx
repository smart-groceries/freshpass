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
    const [testName, setTestName] = React.useState("Kraft");
    const [name, setName] = React.useState<string | null>(null);
    const [brand, setBrand] = React.useState<string | null>(null);
    const [price, setPrice] = React.useState<number | null>(null);
    const [image, setImage] = React.useState<Image | null>(null);
    const [quantityValue, setQuantityValue] = React.useState<number>(0);
    return(
        
        <View style={styles.GroceryItemContainer}>
                <View style={styles.LeftContainer} >
                    <Text> {testName} </Text>
                    <View style={styles.priceContainer}>
                        <Text>$5 ~ </Text>
                        <Text>Aisle 1</Text>
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
                    source={require('./../assets/macncheese.png')}>
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
        padding:10,
        flexDirection:'row',
        fontFamily: 'varelaround-regular',
        marginVertical: 5,
    },
    ItemControllerContainer:{
        backgroundColor:'transparent',
        flexDirection:'row',
    },
    QuantityButtonContainer:{
        backgroundColor:'transparent',
        flexDirection:"row",
        fontFamily: 'varelaround-regular',
    },
    LeftContainer:{
      flex:1,  
      backgroundColor:'transparent',
      fontFamily: 'varelaround-regular',
      paddingVertical: 10,
      paddingBottom: 10
    },
    priceContainer:{
        backgroundColor:'transparent',
        flexDirection:"row",
        fontFamily: 'varelaround-regular',
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
        alignSelf:'flex-end'
    }
});