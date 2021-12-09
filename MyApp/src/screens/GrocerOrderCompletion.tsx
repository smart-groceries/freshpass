import {typeAlias} from '@babel/types';
import RNBounceable from '@freakycoder/react-native-bounceable';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID} from '../graphql/queries';
import {useQuery} from '@apollo/client';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'PaymentConfirm'>;
};
const GrocerOrderCompletion = ({navigation}: Props) => {
  const [shoppingSessionId, setShoppingSessionId] = useState("1");
  const [listOfItems, setlistOfItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  const getItemsResult = useQuery(GET_ITEMS_FOR_SHOPPING_SESSION_BY_ID, {
    variables: {shopping_session_id: shoppingSessionId},
  });

  useEffect(() => {
    if (getItemsResult.data?.getItemsForShoppingSessionById[0] == undefined) {
    } else {
      setlistOfItems(getItemsResult.data.getItemsForShoppingSessionById);
    }
  }, [getItemsResult.data]);

  useEffect(() => {
    var newSubtotal: number = 0
    for (var element in listOfItems)  {
      newSubtotal += (listOfItems[element].quantity) * (listOfItems[element].item_price);
    }
    newSubtotal = +newSubtotal.toFixed(2);
    setSubtotal(newSubtotal);
    var newTax: number = newSubtotal * .095;
    newTax = +newTax.toFixed(2);
    setTax(newTax);
    var newTotal = newSubtotal+newTax;
    newTotal = +newTotal.toFixed(2);
    setTotal(newTotal);
  }, [listOfItems]);

  const renderOpenListIcon = () => {
    return (
      <View style={styles.openListContainer}>
        <Image
          resizeMode="contain"
          source={require('../assets/add_icon.png')}
          style={styles.openListIconImageStyle}></Image>
      </View>
    );
  };

  return (
    <View style={[_container()]}>
      <View style={[styles.checkMarkContainer, {marginTop: 200}]}>
        <Image source={require('../assets/grey-checkmark.png')}></Image>
      </View>
      <Text style={styles.validatedText}>Order Completed</Text>
      <Text style={styles.orderNumber}>Order Number: #{shoppingSessionId}</Text>
      <View style={[styles.totalContainer, {marginTop: 20}]}>
      </View>
      <RNBounceable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Exit</Text>
      </RNBounceable>
    </View>
  );
};

interface Style {
  openListContainer: ViewStyle;
  openListIconImageStyle: ImageStyle;
  validatedText: TextStyle;
  orderNumber: TextStyle;
  orderedItems: TextStyle;
  subtotal: TextStyle;
  buttonText: TextStyle;
  checkMarkContainer: ViewStyle;
  orderedItemsContainer: ViewStyle;
  totalContainer: ViewStyle;
  buttonContainer: ViewStyle;
  subTotalContainer: ViewStyle;
}

const _container = (): ViewStyle => ({
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  flex: 1,
});

const styles = StyleSheet.create<Style>({
  openListContainer: {marginRight: 20},
  openListIconImageStyle: {width: 18, height: 18},
  validatedText: {
    color: '#BBBBBB',
    fontSize: 25,
    fontFamily: 'VarelaRound-Regular',
    marginTop: 30,
  },
  checkMarkContainer: {
    marginTop: 20,
  },
  orderNumber: {
    fontSize: 15,
    fontFamily: 'VarelaRound-Regular',
    color: '#BBBBBB',
  },
  orderedItemsContainer: {
    width: '100%',
    height: 50,
    marginTop: 50,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: '#BBBBBB',
    borderBottomColor: '#BBBBBB',
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  orderedItems: {
    fontSize: 20,
    fontFamily: 'VarelaRound-Regular',
    marginHorizontal: 20,
    marginVertical: 3,
  },
  subtotal: {
    fontSize: 15,
    fontFamily: 'VarelaRound-Regular',
    color: '#BBBBBB',
    marginHorizontal: 20,
    marginVertical: 3,
  },
  totalContainer: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainer: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#BBBBBB',
    margin: 10,
  },
  buttonText: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  subTotalContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
});

export default GrocerOrderCompletion;
