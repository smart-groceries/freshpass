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
import SearchBar from '../components/SearchBar';
import BasicGroceryItem from '../components/BasicGroceryItem';
import {useQuery} from '@apollo/client';
import {GET_ITEMS_FOR_STORE_BY_GROCER_ID} from '../graphql/queries';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';


export interface AddItemSelectionScreenProps {
  style?: ViewStyle | Array<ViewStyle> | undefined;
}

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'AddItemSelectionScreen'>;
    route: RouteProp<RootStackParamList, 'AddItemSelectionScreen'>;
  };

const AddItemSelectionScreen = ({route, navigation}: Props) => {
    const [knownItems, setKnownItems] = useState(route.params.info.listOfItems);
    const [isGrocer, setIsGrocer] = useState(route.params.info.isGrocer);
    const [shoppingSessionId, setShoppingSessionId] = useState(route.params.info.shoppingSessionId);
    const [grocerId, setGrocerId] = useState(route.params.info.grocerId);
    const [empty, setEmpty] = useState(true);
    const [listOfItems, setlistOfItems] = useState([]);
    const getItemsResult = useQuery(GET_ITEMS_FOR_STORE_BY_GROCER_ID, {
        variables: {grocer_id: grocerId},
    });

    console.log("PARAMS");
    console.log(knownItems);
    console.log(grocerId);

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getItemsResult.refetch();
      });
      return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        if (getItemsResult.data?.getItemsForStoreByGrocerId[0] == undefined) {
          setEmpty(true);
        } else {
          setEmpty(false);
          var listOfItemsInit = getItemsResult.data.getItemsForStoreByGrocerId
          console.log("INITIAL ITEMS ARE")
          console.log(listOfItemsInit)
          var idsToRemove = []
          for (var element in listOfItemsInit)  {
            console.log("ELEMENT IS")
            console.log(element)
            console.log("ELEMENT.BARCODEID IS")
            console.log(listOfItemsInit[element].barcode_id)
    
            for (var i in knownItems) {
                console.log("listOfItemsInit[element].barcode_id")
                console.log(listOfItemsInit[element].barcode_id)
                console.log("knownIds[i]")
                console.log(knownItems[i])                
                if (listOfItemsInit[element].barcode_id == knownItems[i].barcode_id) {
                    console.log("listOfItemsInit[element].barcode_id")
                    console.log(listOfItemsInit[element].barcode_id)
                    console.log("knownIds[i]")
                    console.log(knownItems[i])
                    idsToRemove.push(listOfItemsInit[element].barcode_id);
                }
            }

            if (listOfItemsInit[element].quantity == 0) {
                idsToRemove.push(listOfItemsInit[element].barcode_id);
            }
          }

          console.log(idsToRemove);
          for (var i in idsToRemove)  {
              for (var j in listOfItemsInit) {
                if (idsToRemove[i] == listOfItemsInit[j].barcode_id)    {
                    console.log("REMOVING FROM LISTOFITEMSINIT")
                    console.log(listOfItemsInit)
                    console.log(j)
                    listOfItemsInit.splice(j,1);
                    break;
                }
              }
          }
          setlistOfItems(listOfItemsInit);
          console.log(listOfItemsInit);
        }
      }, [getItemsResult.data]);
      
    const navigateToCart = () => {
      if (isGrocer) {
        navigation.navigate('EmployerCartView', {info: {shoppingSessionId}})
      } else {
        navigation.navigate('CartView', {info: {shoppingSessionId}})
      }
    }

    const getListOfItems = () => {
        return listOfItems.map(function (item, i) {
          //console.log("KEY IS")
          //console.log(i)
          return (
                <BasicGroceryItem
                    itemIdProp={item.barcode_id}
                    nameProp={item.item_name}
                    weightProp={item.item_weight}
                    brandProp={item.item_brand}
                    priceProp= {item.item_price}
                    aisleProp={item.item_aisle}
                    shoppingSessionId={shoppingSessionId}
                    navigateFunction={navigateToCart}
                    key={item.barcode_id}
                >
                </BasicGroceryItem>

          );
        });
    };


    return (
        <View style={styles.screen}>
            <View style={styles.sectionContainer}>
                <Text style={styles.title}>Available Items</Text>
                <Text style={styles.instructionText}>Please tap the item you would like to add</Text>
            </View>
        <ScrollView contentContainerStyle={styles._container}>
            {getListOfItems()}
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginTop: 60,
    fontSize: 40,
    color: '#424347',
    fontFamily: 'VarelaRound-Regular'
  },
  instructionText: {
    fontSize: 13,
    color: '#BBBBBB',
    fontFamily: 'VarelaRound-Regular',
    marginTop: 7
  },
  sectionContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
    flexDirection: 'column',
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
});

export default AddItemSelectionScreen;