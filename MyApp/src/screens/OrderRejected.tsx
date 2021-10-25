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

const OrderRejected = () => {
  const [orderNumber, setOrderNumber] = useState(0);
  return (
    <View style={[_container()]}>
      <View style={styles.rejectedContainer}>
        <Image source={require('../assets/rejected.png')}></Image>
      </View>
      <Text style={styles.rejectedText}>Order Rejected!</Text>
      <Text style={styles.orderNumber}>Order Number: #{orderNumber}</Text>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          Your order was rejected by the grocer. Please go back to your cart and
          correct the items that you listed that you have.
        </Text>
        <Text style={styles.paragraph}>
          If you would like to cancel your shopping session at this point,
          please return your items to their proper location and leave.
        </Text>
      </View>
      <RNBounceable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Back to Cart</Text>
      </RNBounceable>
      <RNBounceable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Cancel Session</Text>
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
  rejectedText: TextStyle;
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
  rejectedText: {
    color: '#E89023',
    fontSize: 25,
    fontFamily: 'varelaround-regular',
    marginTop: 30,
    alignSelf: 'center',
  },
  orderNumber: {
    fontSize: 15,
    fontFamily: 'varelaround-regular',
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
    fontFamily: 'varelaround-regular',
    color: '#BBBBBB',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    height: '10%',
    borderRadius: 50,
    backgroundColor: '#E89023',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.33,
    margin: 5,
  },
  buttonText: {
    fontFamily: 'varelaround-regular',
    fontSize: 20,
    color: '#E89023',
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

export default OrderRejected;
