import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  Switch,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {placeholder} from '@babel/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useMutation} from '@apollo/client';
import {ADD_CARD_INFO} from '../graphql/mutations';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'AddPayment'>;
  route: RouteProp<RootStackParamList, 'AddPayment'>;
};

export default function AddPayment({route, navigation}: Props) {
  const [paymentInfo, setPaymentInfo] = useState({
    account_id: route.params.user.id,
    name: '',
    nameValidated: true,
    number: '',
    numberValidated: true,
    month: '',
    monthValidated: true,
    year: '',
    yearValidated: true,
    cvc: '',
    cvcValidated: true,
    default: false,
    validated: false,
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled),
      setPaymentInfo({...paymentInfo, default: isEnabled});
  };
  const [submitted, setSubmitted] = useState(false);
  const [mutateFunction, {data, loading, error}] = useMutation(ADD_CARD_INFO, {
    onError: err => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (submitted) {
      try {
        mutateFunction({
          variables: {
            account_id: paymentInfo.account_id,
            card_number: paymentInfo.number,
            nameoncard: paymentInfo.name,
            month: paymentInfo.month,
            year: paymentInfo.year,
            cvc: paymentInfo.cvc,
          },
        });
      } catch {}

      // navigation.navigate('PaymentMethods', {paymentInfo});
      while (loading) {
        //wait
      }
      // console.log(data.addCardInfo.message);
      if (error) {
        return Alert.alert('Error', 'Could Not Add Card Information');
      }
      console.log(route.params.user.id);
      navigation.navigate('PaymentMethods', {
        user: {
          id: route.params.user.id,
          email: route.params.user.email,
          fname: route.params.user.fname,
          lname: route.params.user.lname,
        },
      });
      // return Alert.alert(
      //   'Created',
      //   data.addCardInfo.message,
      // );
    }
  }, [paymentInfo]);

  const validateName = (text: string) => {
    if (text.trim().length == 0) {
      return false;
    }
    return true;
  };

  // const validateCardNumber = (text: string) => {

  // };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Name on Card</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Name on Card'}
            placeholderTextColor="black"
            onChangeText={val => {
              setPaymentInfo({...paymentInfo, name: val});
            }}
          />
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Card Number</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Card Number'}
            keyboardType="numeric"
            placeholderTextColor="black"
            onChangeText={val => {
              setPaymentInfo({...paymentInfo, number: val});
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Month</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Month'}
            keyboardType="numeric"
            placeholderTextColor="black"
            onChangeText={val => {
              setPaymentInfo({...paymentInfo, month: val});
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Year</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Year'}
            keyboardType="numeric"
            placeholderTextColor="black"
            onChangeText={val => {
              setPaymentInfo({...paymentInfo, year: val});
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>CVC</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'CVC'}
            keyboardType="numeric"
            placeholderTextColor="black"
            onChangeText={val => {
              setPaymentInfo({...paymentInfo, cvc: val});
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.securityText}>
            3 or 4 digits usually found on the signature strip
          </Text>
        </View>
        <View
          style={[
            styles.largeItemContainer,
            {
              alignItems: 'center',
              justifyContent: 'space-evenly',
              height: 40,
            },
          ]}>
          <Switch
            trackColor={{false: '#E89023', true: '#71BF61'}}
            thumbColor="#BBBBBB"
            ios_backgroundColor="#3e3e3e"
            value={isEnabled}
            onValueChange={toggleSwitch}></Switch>
          <Text style={styles.securityText}>SET AS DEFAULT</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setPaymentInfo({...paymentInfo, validated: true});
            setSubmitted(true);
          }}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    // padding: 25,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputField: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 324,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 10,
    borderRadius: 12,
    // borderWidth: 1,
    // borderColor: '#BBBBBB',
    margin: 15,
    fontFamily: 'VarelaRound-Regular',
  },
  inputField2: {
    width: '40%',
    // borderWidth: 1,
    // borderColor: '#BBBBBB',
    backgroundColor: '#F3F3F3',
    margin: 15,
    fontFamily: 'VarelaRound-Regular',
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 324,
    justifyContent: 'center',
  },
  securityText: {
    justifyContent: 'center',
    // flex: 1,
    flexWrap: 'wrap',
    margin: 10,
    fontFamily: 'VarelaRound-Regular',
    // padding: 0,
    fontSize: 12,
    textAlign: 'center',
  },
  default: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    // margin: 100,
    // backgroundColor: 'black',
  },
  addButton: {
    width: 324,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71BF61',
    marginVertical: '10%',
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 18,
  },
  itemText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
  },
  largeItemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '95%',
    height: 85,
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 15,
    flexWrap: 'wrap',
  },
  userDataTextInput: {
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingHorizontal: 10,
    color: 'black',
    marginVertical: 10,
    // borderColor: '#999999',
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontSize: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '45%',
    height: 85,
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
});
