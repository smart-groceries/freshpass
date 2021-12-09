import {StackNavigationProp} from '@react-navigation/stack';
import {print, validate} from 'graphql';
import React, {useEffect, useRef} from 'react';
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
  Alert,
  ActivityIndicator,
} from 'react-native';
// import {CREATE_ACCOUNT} from '../graphql/queries';
import {ApolloError, useMutation, useQuery} from '@apollo/client';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {ADD_ITEM_TO_STORE_CATALOG, CREATE_ACCOUNT, CREATE_NEW_ITEM} from '../graphql/mutations';
import {AUTHENTICATE} from '../graphql/queries';

//ADD CORRECT NAVIGATION LATER
type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'AddItem'>;
  };

const AddItem = ({navigation}: Props) => {
    const [submitted, setSubmitted] = React.useState(false);
  
    const [createNewItem, createNewItemResult] = useMutation(CREATE_NEW_ITEM, {
      onError: err => {
        console.log(err);
      },
    });

    const [addItemToCatalog, addItemToCatalogResult ] = useMutation(ADD_ITEM_TO_STORE_CATALOG, {
        onError: err => {
          console.log(err);
        },
      });

      const [item, setItem] = React.useState({
        barcode_id: 0,
        item_maker: '',
        item_name: '',
        item_weight: '',
        item_price: 0,
        item_quantity: 0,
        item_aisle: ''
      });

      const createItem = () => {
        try {
            createNewItem({
            variables: {
              barcode_id: item.barcode_id,
              item_maker: item.item_maker,
              item_name: item.item_name,
              item_weight: item.item_weight,
            },
            
          });
        } catch {}
        while (createNewItemResult.loading) {}
        if (createNewItemResult.error) {
          console.log(createNewItemResult.error);
        }
        
        // try {
        //     addItemToCatalog({
        //     variables: {
        //         barcode_id: item.barcode_id,
        //         //store_id: $store_id,
        //         item_aisle: item.item_aisle,
        //         item_price: item.item_price,
        //         quantity: item.item_quantity
        //     },
            
        //   });
        // } catch {}
        // while (addItemToCatalogResult.loading) {}
        // if (addItemToCatalogResult.error) {
        //   console.log(addItemToCatalogResult.error);
        // }
      }

      useEffect( () => {

      }, [item]);

      return (
    <View style={submitted ? styles.containerLoading : styles.container}>
        <Image
            //style = {styles.image}
            source={require('./../assets/macncheese.png')}/>

      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Barcode Id</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Barcode ID"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setItem({
                  ...item,
                  barcode_id:+val,
                })
              }
            />
          </View>
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Item Brand</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Item Brand"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setItem({
                  ...item,
                  item_maker: val,
                })
              }
            />
          </View>

        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Item Title</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Item Title"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setItem({
                  ...item,
                  item_name: val,
                })
              }
            />
          </View>

        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Item Weight</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Item Weight"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setItem({
                  ...item,
                  item_weight: val,
                })
              }
            />
          </View>

        </View>
        
        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Item Aisle</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Item Aisle"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setItem({
                  ...item,
                  item_aisle: val,
                })
              }
            />
          </View>

        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Item Quantity</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Item Quantity"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setItem({
                  ...item,
                  item_quantity: +val,
                })
              }
            />
          </View>

        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
                createItem()
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
              Add Item
            </Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
      {submitted ? (
        <ActivityIndicator size="large" style={styles.loading} color="green" />
      ) : null}
    </View>
      );
}



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
  });
  
  export default AddItem;