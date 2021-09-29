import RNBounceable from '@freakycoder/react-native-bounceable';
import * as React from 'react';

import {
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  Text,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function GroceryItem() {  
    return (
        <View style={styles.GroceryItemContainer}>
                <View style={styles.LeftContainer} >
                    <Text>Name</Text>
                    <Text>Brand</Text>
                    <View style={styles.infoContainer}>
                        <Text>$Price ~ </Text>
                        <Text>Aisle 1</Text>
                    </View>
                    <View style={styles.ItemControllerContainer}>
                        <TouchableHighlight><Text>-</Text></TouchableHighlight>
                        <Text> Number </Text>
                        <TouchableHighlight><Text>+</Text></TouchableHighlight>
                        <TouchableHighlight>
                            <Image resizeMode='contain' source={require('./assets/filter_icon.png')}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.ItemPicContainer}>
                    <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={require('./assets/store_icon.png')}>
                    </Image>
                </View>
        </View>
        );
}

const styles = StyleSheet.create({
    GroceryItemContainer:{
        width:"100%",
        backgroundColor:'blue',
        padding:10,
        flexDirection:'row'
    },
    ItemControllerContainer:{
        backgroundColor:'white',
        flexDirection:'row',
    },
    LeftContainer:{
      flex:1,  
      backgroundColor:'green',
    },
    infoContainer:{
        backgroundColor:'yellow',
        flexDirection:"row",
    },
    ItemPicContainer:{
        flex:1,
        alignContent:'flex-end',
        justifyContent:'flex-end',
        backgroundColor:'black',
    },
    image:{
        flex:1,
        alignSelf:'flex-end'
    }
});