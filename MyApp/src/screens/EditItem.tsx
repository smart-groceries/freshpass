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
import {UPDATE_CUSTOMER, UPDATE_ITEM_IN_STORE_CATALOG} from '../graphql/mutations';
import Item from '../components/GroceryItem';
import getImageUrl from '../utils/images';

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
};

const EditItem = ({route,navigation}: Props) => {
    const [submitted, setSubmitted] = React.useState(false);
    
    const [item, setItem] = React.useState({
        storeId: route.params.item.storeId,
        id: route.params.item.id,
        name: route.params.item.name,
        weight: route.params.item.weight,
        brand: route.params.item.brand,
        price: route.params.item.price,
        aisle: route.params.item.aisle,
        quantity: route.params.item.quantity,
    });

    const [EditItemFunction, EditItemFunctionResult] = useMutation(UPDATE_ITEM_IN_STORE_CATALOG, {
        onError: err => {
          console.log(err);
        },
      });
    
    const EditItemWrapperFunc = (field_input: String, new_value_input: any) => {
        console.log(item.storeId)
        
        try {
            EditItemFunction({
            variables: {
              field_name: field_input,
              new_value: new_value_input,
              barcode_id: item.id,
              store_id: item.storeId
            },
            
          });
        } catch {}
        while (EditItemFunctionResult.loading) {}
        if (EditItemFunctionResult.error) {
          console.log(EditItemFunctionResult.error);
        }
    }

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
    
    console.log("IMAGE URL:")
    console.log(imageUrl)
    return (
        <View>
            <View style={styles.ItemPicContainer}>
                    <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={{uri: imageUrl}}>
                    </Image>
                </View>
    
          <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <ScrollView contentContainerStyle={styles.scrollContainer}>
    
            <View style={styles.action}>
              <Text style={[styles.text_footer]}>Item Id</Text>
              <View style={styles.inputView}>
                <TextInput
                  editable = {false}
                  placeholder={item.id}
                  placeholderTextColor="#003f5c"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val =>
                    setItem({
                      ...item,
                      id:val,
                    })
                  }
                />
              </View>
            </View>
    
            <View style={styles.action}>
              <Text style={[styles.text_footer]}>Item Quantity</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder={item.quantity.toString()}
                  placeholderTextColor="#003f5c"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val =>
                    setItem({
                      ...item,
                      quantity: +val,
                    })
                  }
                >{item.quantity}</TextInput>
              </View>
    
            </View>
    
            <View style={styles.action}>
              <Text style={[styles.text_footer]}>Item Aisle</Text>
              <View style={styles.inputView}>
                <TextInput
                //   placeholder={item.aisle}
                //   placeholderTextColor="#003f5c"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val =>
                    setItem({
                      ...item,
                      aisle: val,
                    })
                  }
                >{item.aisle}</TextInput>
              </View>
    
            </View>
    
            <View style={styles.action}>
              <Text style={[styles.text_footer]}>Item Price</Text>
              <View style={styles.inputView}>
                <TextInput 
                  //placeholder={item.price.toString()}
                  //placeholderTextColor="#003f5c"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val =>
                    setItem({
                      ...item,
                      price: +val,
                    })
                  }
                >
                    {item.price}
                </TextInput>
              </View>
    
            </View>
                   
    
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => {
                    EditItemWrapperFunc('quantity', item.quantity);
                    EditItemWrapperFunc('item_price', item.price);
                    EditItemWrapperFunc('item_aisle', item.aisle);
                    navigation.pop();
                }}
                style={[
                  styles.signIn,
                  {
                    borderColor: '#71BF61',
                    backgroundColor: '#71BF61',
                    borderWidth: 1,
                    marginTop: 10,
                  },
                ]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#FFFFFF',
                    },
                  ]}>
                  Edit Item
                </Text>
              </TouchableOpacity>
            </View>
            
          </ScrollView>
          {submitted ? (
            <ActivityIndicator size="large" style={styles.loading} color="green" />
          ) : null}
        </View>
          );
    };
    
//     return(
//         <View style={{alignItems:'center'}}>
//             <Image
//             //style = {styles.image}
//             source={require('./../assets/macncheese.png')}/>

//             <View style={styles.itemContainer}>
//                 <TextInput
//                     style={styles.userDataTextInput}
//                     placeholder = {item.id}
//                     placeholderTextColor="#003f5c"/>
//             </View>
//             <View style={styles.itemContainer}>
//                 <TextInput
//                     style={styles.userDataTextInput}
//                     placeholder = {item.name}
//                     //onChangeText = 
//                     placeholderTextColor="#003f5c"/>
//             </View>
        
//             <View style={styles.itemContainer}>
//                 <TextInput
//                     style={styles.userDataTextInput}
//                     placeholder = {item.brand}
//                     placeholderTextColor="#003f5c"/>
//             </View>
            
//             <View style={styles.itemContainer}>
//                 <TextInput
//                     style={styles.userDataTextInput}
//                     placeholder = {item.price.toString()}
//                     placeholderTextColor="#003f5c"/>
//             </View>
            
//             <View style={styles.itemContainer}>
//                 <TextInput
//                     style={styles.userDataTextInput}
//                     placeholder = {item.quantity.toString()}
//                     placeholderTextColor="#003f5c"/>
//             </View>
            

//             <TouchableHighlight 
//             style={styles.saveButton}
//             >
//                 <Text style={styles.SaveText}>Save</Text>
//             </TouchableHighlight>

//             <TouchableHighlight 
//             style={styles.cancelButton}
//             >
//                 <Text style={styles.SaveText}>Cancel</Text>
//             </TouchableHighlight>
//         </View>
//     );

// };

 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
      },
      containerLoading: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        opacity: 0.6,
      },
    
      imageContainer: {
        alignItems: 'center',
        // resizeMode: 'contain',
        // flex: 1,
        // position: 'absolute',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: -50,
        // marginTop: 100,
        // backgroundColor: 'black',
      },
      inputView: {
        width: 324,
        height: 55,
        // marginBottom: 20,
    
        backgroundColor: '#FDF2E6',
        alignItems: 'center',
        borderRadius: 12,
        justifyContent: 'center',
      },
    
      scrollContainer: {
        alignItems: 'center',
        // paddingTop: 50,
        backgroundColor: '#FFFFFF',
      },
    
      header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
      },
      footer: {
        flex: Platform.OS === 'android' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'VarelaRound-Regular',
      },
      text_footer: {
        color: '#E89023',
        fontSize: 18,
        fontFamily: 'VarelaRound-Regular',
        marginVertical: 0,
      },
      action: {
        height: 130,
        // justifyContent: 'space-evenly',
        // backgroundColor: 'black',
      },
      textInput: {
        // flex: 1,
        // marginTop: Platform.OS === 'android' ? 0 : -12,
        // paddingLeft: 10,
        // height: 55,
        color: '#003f5c',
        width: '90%',
        fontFamily: 'VarelaRound-Regular',
        flex: 1,
      },
      button: {
        alignItems: 'center',
        // marginTop: 10,
      },
      signIn: {
        width: 324,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
      },
      textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'VarelaRound-Regular',
      },
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,
        justifyContent: 'center',
        fontFamily: 'VarelaRound-Regular',
      },
      color_textPrivate: {
        color: 'green',
      },
      errorText: {
        color: 'red',
        fontFamily: 'VarelaRound-Regular',
        marginTop: 5,
      },
      loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{scale: 2.5}],
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
    }

});

export default EditItem;
