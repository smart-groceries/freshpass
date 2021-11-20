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
  const [user, setUser] = useState({
    email: route.params.user.email,
    fname: route.params.user.fname,
    lname: route.params.user.lname,
    id: route.params.user.id,
  });

  const [empty, setEmpty] = useState(false);

  // query to get payment info for user
  // const {error, loading, data} = useQuery();

  const obscureCardNumber = (text: string) => {
    const hiddenPart = text.slice(0, -4);
    const visible = text.slice(-4);
    const hidden = Array.from(hiddenPart).map(char => {
      return '*';
    });
    hidden.push(visible);
    return hidden;
  };

  // will finish this when get payment info query is done
  return (
    <View style={styles.mainContainer}>
      {empty ? (
        <View style={{alignItems: 'center'}}>
          <View style={styles.TextContainer}>
            <Text style={styles.NoPaymentText}>No Payment Info Found</Text>
            <Text style={styles.NoPaymentSubtext}>
              You can add and edit payments during checkout
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddPayment', {user})}>
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
        <View style={styles.mainContainer}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.headerText}>Saved Payment Methods</Text>
            <View>
              <TouchableOpacity style={styles.paymentMethod}>
                <View style={styles.paymentTextContainer}>
                  <Text style={styles.userInfoText}>Name: Andrew Baltazar</Text>
                  <Text style={styles.userInfoText}>
                    Card ending in {obscureCardNumber('12345678')}
                  </Text>
                </View>
                <Image
                  source={require('../assets/chevron_pointing_right.png')}></Image>
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>Add Payment Methods</Text>
                <TouchableOpacity style={styles.paymentMethod}>
                  <View style={styles.paymentTextContainer}>
                    <Text style={styles.userInfoText}>Add payment method</Text>
                  </View>
                  <Image
                    source={require('../assets/chevron_pointing_right.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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

  scroll: {
    padding: 15,
  },

  headerText: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
  },

  userInfoText: {
    fontFamily: 'VarelaRound-Regular',
    // fontSize: 12,
  },

  paymentTextContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
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
    height: 55,
    width: '100%',
    flexDirection: 'row',
    // borderWidth: 0.5,
    // borderColor: '#BBBBBB',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default Payments;
