import {tsNamedTupleMember} from '@babel/types';
import React, {useEffect} from 'react';
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
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';

import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import {GET_USER_PASSWORD_BY_USER_ID} from '../graphql/queries';
import {UPDATE_CUSTOMER} from '../graphql/mutations';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'EditAccount'>;
  route: RouteProp<RootStackParamList, 'EditAccount'>;
};

const EditAccountInfoScreen = ({route, navigation}: Props) => {
  const [user, setUser] = React.useState({
    email: route.params.user.email,
    fname: route.params.user.fname,
    lname: route.params.user.lname,
    id: route.params.user.id,
    password: '',
    fNameValidated: true,
    lNameValidated: true,
  });

  const [submitted, setSubmitted] = React.useState(false);

  const {error, loading, data, refetch} = useQuery(
    GET_USER_PASSWORD_BY_USER_ID,
    {
      variables: {id: user.id},
      pollInterval: 1000,
    },
  );

  const [
    updateCustomer,
    {
      data: updateCustomerData,
      loading: updateCustomerLoading,
      error: updateCustomerError,
    },
  ] = useMutation(UPDATE_CUSTOMER, {
    onError: err => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (data) {
      setUser({...user, password: data.getUserPasswordById.password});
    }
  }, [data]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (user.fNameValidated && user.lNameValidated && submitted) {
      try {
        updateCustomer({
          variables: {
            customer_id: user.id,
            field_name: 'customer_fname',
            new_value: user.fname,
          },
        });
        updateCustomer({
          variables: {
            customer_id: user.id,
            field_name: 'customer_lname',
            new_value: user.lname,
          },
        });
      } catch {}

      navigation.navigate('Account', {
        user: {
          email: user.email,
          id: user.id,
          fname: user.fname,
          lname: user.lname,
        },
      });

      setSubmitted(false);
    } else if (!user.fNameValidated && !user.lNameValidated && submitted) {
      Alert.alert(
        'Please enter a valid first and last name',
        'Please make sure you are entering a valid first and last name or that the field is not blank.',
      );
    } else if (!user.fNameValidated && submitted) {
      Alert.alert(
        'Enter a valid first name',
        'Please make sure you are entering a valid first name or that the field is not empty.',
      );
    } else if (!user.lNameValidated && submitted) {
      Alert.alert(
        'Enter a valid last name',
        'Please make sure you are entering a valid last name or that the field is not blank.',
      );
    }
    setSubmitted(false);
  }, [user]);

  useEffect(() => {}, [submitted]);
  // const [changed, setChanged] = React.useState(false);

  const obscurePassword = (password: string) => {
    const hidden = Array.from(password).map(char => {
      return '*';
    });

    return hidden;
  };

  const validateText = (text: string) => {
    if (text.trim().length == 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={loading ? styles.containerLoading : styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>First Name:</Text>
          <TextInput
            style={styles.userDataTextInput}
            onChangeText={val => {
              setUser({...user, fname: val, fNameValidated: validateText(val)});
            }}>
            {user.fname}
          </TextInput>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Last Name:</Text>
          <TextInput
            style={styles.userDataTextInput}
            onChangeText={val => {
              setUser({...user, lname: val, lNameValidated: validateText(val)});
            }}>
            {user.lname}
          </TextInput>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Email:</Text>
          {/* <TouchableOpacity style={styles.editButton}>
            <Text>Edit</Text>
          </TouchableOpacity> */}
          <View style={styles.userDataView}>
            <Text style={[styles.userDataText, {opacity: 0.5}]}>
              {user.email}
            </Text>
          </View>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Password</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('ChangePassword', {user})}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <View style={styles.userDataView}>
            <Text style={[styles.userDataText, {opacity: 0.5}]}>
              {obscurePassword(user.password)}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            setUser({
              ...user,
              fNameValidated: validateText(user.fname),
              lNameValidated: validateText(user.lname),
            });
            setSubmitted(true);
          }}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
      {loading || submitted ? (
        <ActivityIndicator
          size="large"
          color="#71BF61"
          style={styles.loading}></ActivityIndicator>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.6,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    // justifyContent: 'center',
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
  userDataView: {
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 10,
  },
  itemText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
  },
  userDataText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
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
  editButton: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#E89023',
    height: 25,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 18,
  },
  saveButton: {
    marginVertical: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 324,
    backgroundColor: '#71BF61',
    borderRadius: 12,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{scale: 2.5}],
  },
});

export default EditAccountInfoScreen;
