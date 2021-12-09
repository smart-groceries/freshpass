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
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useQuery} from '@apollo/client';
import {GET_SHOPPING_SESSION_BY_ID} from '../graphql/queries';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'OrderPending'>;
  route: RouteProp<RootStackParamList, 'CartView'>;
};

const OrderPending = ({route, navigation}: Props) => {
  const [shoppingSession, setShoppingSession] = useState([]);
  const [empty, setEmpty] = useState(true);
  const getShoppingSessionResult = useQuery(GET_SHOPPING_SESSION_BY_ID, {
    variables: {shopping_session_id: route.params.info.shoppingSessionId},
    pollInterval: 1000
  });

  useEffect(() => {
    if (getShoppingSessionResult.data?.getShoppingSessionById == undefined) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setShoppingSession(getShoppingSessionResult.data.getShoppingSessionById);
    }
  }, [getShoppingSessionResult.data]);

  useEffect(() => {
    if (shoppingSession.state_id == 3 || shoppingSession.state_id == 5) {
        navigation.navigate('OrderRejected', {info: { shoppingSessionId: shoppingSession.shopping_session_id}})
    }
    if (shoppingSession.state_id == 4) {
      navigation.navigate('PaymentConfirm', {info: { shoppingSessionId: shoppingSession.shopping_session_id}})
    }
  }, [shoppingSession]);



  return (
    <View style={[_container()]}>
      <Text style={styles.headerText}>Validating Order...</Text>
      <Text style={styles.orderNumber}>Order Number: #{shoppingSession.shopping_session_id}</Text>
      <Text style={styles.orderNumber}>State Id: #{shoppingSession.state_id}</Text>
    
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
        Please present this screen to the store employee at the front, by the FreshPass sign. 
        They will scan this code, and verify the items you put in your cart.
        </Text>
      </View>
      <RNBounceable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('CartView', {info: { shoppingSessionId: shoppingSession.shopping_session_id}})}>
        <Text style={styles.buttonText}>Back to Cart</Text>
      </RNBounceable>
      </View>
  );
};

const _container = (): ViewStyle => ({
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  flex: 1,
});

interface Style {
  rejectedContainer: ViewStyle;
  headerText: TextStyle;
  orderNumber: TextStyle;
  paragraph: TextStyle;
  paragraphContainer: ViewStyle;
  buttonContainer: ViewStyle;
  //buttonsContainer: ViewStyle;
  buttonText: TextStyle;
  //cancelContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  rejectedContainer: {
    marginTop: 10,
  },
  headerText: {
    color: '#E89023',
    fontSize: 25,
    fontFamily: 'VarelaRound-Regular',
    marginTop: 120,
    alignSelf: 'center',
  },
  orderNumber: {
    fontSize: 15,
    fontFamily: 'VarelaRound-Regular',
    color: '#BBBBBB',
  },
  paragraphContainer: {
    marginTop: 5,
    height: 175,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginHorizontal: 55,
  },
  paragraph: {
    fontSize: 15,
    fontFamily: 'VarelaRound-Regular',
    color: '#BBBBBB',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  buttonContainer: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#E89023',
    margin: 10,
    marginTop: 250
  },
  buttonText: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  // buttonsContainer: {
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // cancelContainer: {
  //   width: '80%',
  //   height: '10%',
  //   borderRadius: 50,
  //   backgroundColor: '#E89023',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   opacity: 0.33,
  // },
});

export default OrderPending;
