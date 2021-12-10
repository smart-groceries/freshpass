import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {ADD_BANK_INFO} from '../graphql/mutations';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'AddBank'>;
  route: RouteProp<RootStackParamList, 'AddBank'>;
};

const AddBankAccountScreen = ({route, navigation}: Props) => {
  const [grocer, setGrocer] = useState({
    account_id: route.params.grocer.account_id,
    email: route.params.grocer.email,
    balance: route.params.grocer.balance,
    address: route.params.grocer.address,
    grocer_name: route.params.grocer.grocer_name,
  });
  const [bankAccountInfo, setBankAccountInfo] = useState({
    account_number: '',
    routing_number: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [addBank, {data, loading, error}] = useMutation(ADD_BANK_INFO, {
    onError: err => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (submitted) {
      try {
        addBank({
          variables: {
            store_id: grocer.account_id,
            account_number: bankAccountInfo.account_number,
            routing_number: bankAccountInfo.routing_number,
          },
        });
      } catch {}
      if (error) {
        return Alert.alert('Error', 'Could not add Bank Account Information');
      }
      Alert.alert(
        'Bank Account Added',
        'Bank Account has been added successfully.',
        [
          {
            text: 'Ok',
            style: 'default',
            onPress: () => navigation.pop(),
          },
        ],
      );
    }
  }, [bankAccountInfo]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Account Number</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Account Number'}
            placeholderTextColor="black"
            onChangeText={val => {
              setBankAccountInfo({...bankAccountInfo, account_number: val});
            }}
          />
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Account Number</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Routing Number'}
            keyboardType="numeric"
            placeholderTextColor="black"
            onChangeText={val => {
              setBankAccountInfo({...bankAccountInfo, routing_number: val});
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setBankAccountInfo({...bankAccountInfo});
            setSubmitted(true);
          }}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

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

export default AddBankAccountScreen;
