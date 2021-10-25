import React from 'react';
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

const Payments = () => {
  return (
    <View>
      <View style={styles.TextContainer}>
        <Text style={styles.NoPaymentText}>No Payment Info Found</Text>
        <Text style={styles.NoPaymentSubtext}>
          You can add and edit payments during checkout
        </Text>
      </View>

      <View style={styles.PaymentMethodContainer}>
        <Image
          style={styles.searchIconImageStyle}
          source={require('./../assets/iconplus.png')}
        />
        <Text style={styles.AddPaymentText}>Add Payment Method</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   mainContainer: {
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },

  TextContainer: {
    width: '90%',
    height: 150,
    top: 100,
  },
  NoPaymentText: {
    width: '90%',
    bottom: '20%',
    fontFamily: 'varelaround-regular',
    fontSize: 20,
    left: 20,
    top: '70%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#151522',
  },
  NoPaymentSubtext: {
    width: '90%',
    top: '90%',
    left: 20,
    fontFamily: 'varelaround-regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    textAlign: 'center',
    alignItems: 'center',
    color: '#999999',
  },
  PaymentMethodContainer: {
    position: 'absolute',
    width: 325,
    height: 150,
    left: 25,
    top: 400,
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
  },
  AddPaymentText: {
    top: '70%',
    left: '20%',
    position: 'absolute',
    fontFamily: 'varelaround-regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    color: '#F2994A',
  },
  searchIconImageStyle: {
    position: 'relative',
    width: 70,
    height: 70,
    left: 120,
    top: 25,
  },
});

export default Payments;
