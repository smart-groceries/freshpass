import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useMutation, useQuery} from '@apollo/client';
import {AUTHENTICATE, GET_USER_PASSWORD_BY_USER_ID} from '../graphql/queries';
import {RouteProp} from '@react-navigation/native';
import {UPDATE_PASSWORD} from '../graphql/mutations';
import {tsObjectKeyword} from '@babel/types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ChangePassword'>;
  route: RouteProp<RootStackParamList, 'ChangePassword'>;
};

const ChangePasswordScreen = ({route, navigation}: Props) => {
  const [user, setUser] = React.useState({id: route.params.user.id});
  const [userCredentials, setUserCredentials] = React.useState({
    password: route.params.user.password,
    newPassword: '',
    confirmPassword: '',
    verifyPassword: '',
    passwordConfirmed: true,
    passwordValidated: true,
    passwordVerified: true,
  });

  const [updatePassword, {data, loading, error}] = useMutation(
    UPDATE_PASSWORD,
    {
      onError: err => {
        console.log(err);
      },
    },
  );

  const [submitted, setSubmitted] = React.useState(false);

  useEffect(() => {
    console.log(userCredentials);
    if (
      userCredentials.passwordConfirmed &&
      userCredentials.passwordValidated &&
      userCredentials.passwordVerified &&
      submitted
    ) {
      setSubmitted(false);
      try {
        updatePassword({
          variables: {id: user.id, pass: userCredentials.newPassword},
        });
      } catch {}

      if (loading) {
        console.log('loading?');
      }
      Alert.alert(
        'Password Changed',
        'Password has been changed successfully.',
        [
          {
            text: 'Ok',
            style: 'default',
            onPress: () => navigation.pop(),
          },
        ],
      );
    }
    setSubmitted(false);
  }, [userCredentials]);

  const validatePassword = (text: string) => {
    if (text.trim().length < 8) {
      return false;
    }
    return true;
  };

  const confirmPassword = (text: string) => {
    if (text != userCredentials.newPassword || text.trim().length < 8) {
      return false;
    }
    return true;
  };

  const verifyPassword = (text: string) => {
    if (text != userCredentials.password || text.trim().length < 8) {
      return false;
    }
    return true;
  };
  // console.log(userCredentials.password);
  // console.log(userCredentials.newPassword);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Current Password:</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder="Current Password"
            secureTextEntry={true}
            onChangeText={val => {
              console.log(val);
              setUserCredentials({
                ...userCredentials,
                passwordVerified: verifyPassword(val),
                verifyPassword: val,
              });
            }}></TextInput>
          {!userCredentials.passwordVerified ? (
            <Text style={styles.errorText}>
              * Make sure you are entering the current password
            </Text>
          ) : null}
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>New Password:</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder="New Password"
            secureTextEntry={true}
            onChangeText={val => {
              setUserCredentials({
                ...userCredentials,
                newPassword: val,
                passwordValidated: validatePassword(val),
              });
            }}></TextInput>
          {!userCredentials.passwordValidated ? (
            <Text style={styles.errorText}>
              * Password must contain at least 8 characters
            </Text>
          ) : null}
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Confirm New Password:</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder="Confirm New Password"
            secureTextEntry={true}
            onChangeText={val => {
              setUserCredentials({
                ...userCredentials,
                confirmPassword: val,
                passwordConfirmed: confirmPassword(val),
              });
            }}></TextInput>
          {!userCredentials.passwordConfirmed ? (
            <Text style={styles.errorText}>* Passwords must match</Text>
          ) : null}
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            {'\u2B24'} Password needs to be at least 8 characters in length
          </Text>
        </View>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => {
            setUserCredentials({
              ...userCredentials,
              passwordConfirmed: confirmPassword(
                userCredentials.confirmPassword,
              ),
              passwordValidated: validatePassword(userCredentials.newPassword),
              passwordVerified: verifyPassword(userCredentials.verifyPassword),
            });
            setSubmitted(true);
          }}>
          <Text style={styles.resetButtonText}>Reset</Text>
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
  largeItemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '95%',
    height: 100,
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 15,
    flexWrap: 'wrap',
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
  instructionContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '95%',
    // height: 85,
    margin: 25,
  },
  instructionText: {
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'VarelaRound-Regular',
  },
  resetButtonText: {
    fontSize: 18,
  },
  resetButton: {
    marginTop: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 324,
    backgroundColor: '#71BF61',
    borderRadius: 12,
  },
  errorText: {
    color: 'red',
    fontFamily: 'VarelaRound-Regular',
    // marginTop: 5,
  },
});

export default ChangePasswordScreen;
