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
  ImageComponent,
  Image,
} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {set} from 'mongoose';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'PaymentMethods'>;
  route: RouteProp<RootStackParamList, 'PaymentMethods'>;
};

const Payments = ({route, navigation}: Props) => {
  const obscureCardNumber = (text: string) => {
    const hiddenPart = text.slice(0, -4);
    const visible = text.slice(-4);
    const hidden = Array.from(hiddenPart).map(char => {
      return '*';
    });
    hidden.push(visible);
    return hidden;
  };

  return (
    <View style={styles.mainContainer}>
      {route.params?.paymentInfo == undefined ? (
        <View style={{alignItems: 'center'}}>
          <View style={styles.TextContainer}>
            <Text style={styles.NoPaymentText}>No Payment Info Found</Text>
            <Text style={styles.NoPaymentSubtext}>
              You can add and edit payments during checkout
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AddPayment')}>
            <View style={styles.PaymentMethodContainer}>
              <Image
                style={styles.searchIconImageStyle}
                source={require('./../assets/iconplus.png')}
              />
              <Text style={styles.AddPaymentText}>Add Payment Method</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text>Saved Payment Methods</Text>
          <View style={styles.paymentMethod}>
            <View style={styles.searchIconImageStyle}>
              <Image
                source={require('../assets/credit_card.png')}
                resizeMode="contain"></Image>
            </View>
            <View>
              <Text>{route.params.paymentInfo.name}</Text>
              <Text>{obscureCardNumber(route.params.paymentInfo.number)}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
  },

  TextContainer: {
    width: '90%',
    height: 150,
    alignItems: 'center',
    // top: 100,
  },
  NoPaymentText: {
    width: '90%',
    // bottom: '20%',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
    // left: 20,
    // top: '70%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#151522',
    marginTop: 75,
  },
  NoPaymentSubtext: {
    width: '90%',
    // top: '90%',
    // left: 20,
    fontFamily: 'VarelaRound-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    textAlign: 'center',
    alignItems: 'center',
    color: '#999999',
    margin: 15,
  },
  PaymentMethodContainer: {
    marginTop: 100,
    // position: 'absolute',
    width: 325,
    height: 150,
    // left: 25,
    // top: 400,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: 'orange',
    borderWidth: 1,
    shadowColor: '#999999',
    shadowOpacity: 5,
    shadowOffset: {width: 20, height: 20},
    shadowRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  AddPaymentText: {
    // top: '70%',
    // left: '20%',
    // position: 'absolute',
    fontFamily: 'VarelaRound-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    color: '#F2994A',
  },
  searchIconImageStyle: {
    // position: 'relative',
    width: 70,
    height: 70,
    // left: 120,
    // top: 25,
  },
  paymentMethod: {
    backgroundColor: '#F3F3F3',
    height: 55,
    width: '100%',
    flexDirection: 'row',
  },
});

export default Payments;
