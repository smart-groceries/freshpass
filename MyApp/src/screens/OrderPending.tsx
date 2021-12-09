import {typeAlias} from '@babel/types';
import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'OrderPending'>;
  route: RouteProp<RootStackParamList, 'CartView'>;
};

const OrderPending = ({route, navigation}: Props) => {
  const [shoppingSessionId, setShoppingSessionId] = useState(route.params.info.shoppingSessionId);
  return (
    <View style={[_container()]}>
      <Text style={styles.headerText}>Validating Order...</Text>
      <Text style={styles.orderNumber}>Order Number: #{shoppingSessionId}</Text>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
        Please present this screen to the store employee at the front, by the FreshPass sign. 
        They will scan this code, and verify the items you put in your cart.
        </Text>
      </View>
      <RNBounceable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('CartView', {info: { shoppingSessionId}})}>
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
