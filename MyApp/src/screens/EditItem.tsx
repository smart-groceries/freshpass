import {tsNamedTupleMember} from '@babel/types';
import React, {useEffect} from 'react';
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
  Image,
  ActivityIndicator,
  Alert,
  TouchableHighlight,
} from 'react-native';

import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import {GET_USER_PASSWORD_BY_USER_ID} from '../graphql/queries';
import {UPDATE_CUSTOMER} from '../graphql/mutations';
import Item from '../components/GroceryItem';


type Props = {
    // idProp: string
    // nameProp: string
    // weightProp: string
    // brandProp: string
    // priceProp: number
    // aisleProp: string
    // quantityProp: number
    navigation: StackNavigationProp<RootStackParamList, 'EditItem'>;
    route: RouteProp<RootStackParamList, 'EditItem'>;
}

const EditItem = ({route,navigation}: Props) => {
    const [item, setItem] = React.useState({
        id: route.params.item.id,
        name: route.params.item.name,
        weight: route.params.item.weight,
        brand: route.params.item.brand,
        price: route.params.item.price,
        aisle: route.params.item.aisle,
        quantity: route.params.item.quantity,
    });
    
    console.log('QUANTITY: ' + item.quantity)
    console.log(item)
    return(
        <View>
            <Image
            //style = {styles.image}
            source={require('./../assets/macncheese.png')}/>
            <View style={styles.itemContainer}>
                <TextInput
                    style={styles.userDataTextInput}
                    placeholder = {item.name}
                    placeholderTextColor="#003f5c"/>
            </View>
        
            <TextInput
            style={styles.TextInput}
            placeholder= {item.brand}
            placeholderTextColor="#003f5c"/>
            
            <TextInput
            style={styles.TextInput}
            placeholder= {item.price.toString()}
            placeholderTextColor="#003f5c"/>
            
            <TextInput
            style={styles.TextInput}
            placeholder= {item.quantity.toString()}
            placeholderTextColor="#003f5c"/>
            
            <TextInput
            style={styles.IDText}
            placeholder="ID"
            placeholderTextColor="#003f5c"/>
            

            <TouchableHighlight 
            style={styles.saveButton}
            >
                <Text style={styles.SaveText}>Save</Text>
            </TouchableHighlight>
        </View>
    );

};




const styles = StyleSheet.create({
    image:{
        alignSelf:'center'
    },
    itemContainer: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        height: 85,
        justifyContent: 'space-evenly',
        marginVertical: 10,
        paddingHorizontal: 15,
      },
    userDataTextInput: {
        alignSelf: 'flex-start',
        fontFamily: 'VarelaRound-Regular',
        width: '100%',
        backgroundColor: '#F3F3F3',
        borderRadius: 12,
        paddingHorizontal: 10,
        color: 'black',
        marginVertical: 10,
        // borderColor: '#999999',
        // borderWidth: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // fontSize: 20,
      },
    userDataView: {
        alignSelf: 'flex-start',
        width: '100%',
        backgroundColor: '#F3F3F3',
        borderRadius: 12,
        paddingHorizontal: 10,
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 10,
      },
    largeItemContainer: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '95%',
        height: 85,
        justifyContent: 'space-between',
        margin: 10,
        paddingHorizontal: 15,
        flexWrap: 'wrap',
      }, 

    saveButton: {
        marginVertical: '10%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 324,
        backgroundColor: '#71BF61',
        borderRadius: 12,
      },

    TextInput:{
        width:"90%",
        left:20,
        marginTop:20,
        borderRadius:4,
        borderColor:'black',
        borderWidth:1,
        color:'black',
        alignContent:"center",
        alignItems:"center"
    },
    IDText:{
        width:"90%",
        left:20,
        marginTop:20,
        borderRadius:4,
        borderColor:'black',
        borderWidth:1,

        color:'black',
        backgroundColor:'grey'
    },
    SaveText:{
        textAlign:'center',
    }
})


export default EditItem;