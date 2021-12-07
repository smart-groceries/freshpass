import {typeAlias} from '@babel/types';
import React, {useEffect, useState} from 'react';
import {CommonActions} from '@react-navigation/routers';
import {useIsFocused, useNavigation} from '@react-navigation/core';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Dispatch} from 'react';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {AUTHENTICATE} from '../graphql/queries';
import {useQuery} from '@apollo/client';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

export default function App({navigation}: Props) {
  const [user, setUser] = useState({
    id: 0,
    email: 'null',
    fname: 'null',
    lname: 'null',
  });
  const [password, setPassword] = useState('');
  const {error, loading, data, refetch} = useQuery(AUTHENTICATE, {
    variables: {email: user.email, pass: password},
  });
  const [submitted, setSubmitted] = useState(false);

  // const isFocused = useIsFocused();

  // useEffect(() => {
  //   setUser({...user, id: 0, email: 'null', fname: 'null', lname: 'null'});
  // }, [isFocused]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    // console.log(data?.authn?.first_name);
    if (submitted) {
      if (loading) {
        console.log('loading');
      }
      if (error) {
        console.log(error.message);
        setSubmitted(false);
        return Alert.alert(
          'Error',
          'Make sure you are entering valid credentials.',
        );
      }
      if (data.authn.account_id == 0) {
        setSubmitted(false);
        return Alert.alert(
          'User not found',
          'Make sure you are using the correct email and password.',
        );
      }
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              state: {
                index: 0,
                routes: [
                  {
                    name: 'Stores',
                    // ,
                    // params: {
                    //   user: {
                    //     id: data.authn.account_id,
                    //     email: data.authn.email,
                    //     fname: data.authn.first_name,
                    //     lname: data.authn.last_name,
                    //   },
                    // },
                  },
                  {
                    name: 'Account',
                    params: {
                      user: {
                        id: data.authn.account_id,
                        email: data.authn.email,
                        fname: data.authn.first_name,
                        lname: data.authn.last_name,
                      },
                    },
                  },
                  {
                    name: 'Lists',
                    params: {
                      user: {
                        id: data.authn.account_id,
                        email: data.authn.email,
                        fname: data.authn.first_name,
                        lname: data.authn.last_name,
                      },
                    },
                  },
                ],
              },
            },
          ],
        }),
      );
    }
    setSubmitted(false);
  }, [submitted]);

  return (
    <View style={submitted ? styles.containerLoading : styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/freshpass_logo.png')}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={val => setUser({...user, email: val})}
          />
        </View>
      </View>
      <View>
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
      </View>

      {/* <View style={styles.button}> */}
      {/* <TouchableOpacity
      style={styles.signIn}
      onPress={() => {}}></TouchableOpacity> */}
      <View
        style={{
          marginTop: '20%',
          alignItems: 'center',
          // backgroundColor: 'black',
        }}>
        <TouchableOpacity
          onPress={() => {
            setSubmitted(true);
          }}
          style={[styles.signIn]}>
          <Text
            style={[
              styles.textSign,
              {
                color: '#FFFFFF',
              },
            ]}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('Forgot')}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('Create')}>
          <Text style={styles.create_acc_button}>Create Account</Text>
        </TouchableOpacity>
      </View>

      {submitted ? (
        <ActivityIndicator
          size="large"
          color="#71BF61"
          style={styles.loading}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  containerLoading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    opacity: 0.6,
  },

  imageContainer: {
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
    marginTop: 50,
    marginBottom: -25,
    // resizeMode: 'contain',
    // flex: 1,
  },

  linkContainer: {
    margin: 10,
  },

  inputView: {
    width: 324,
    height: 55,
    marginBottom: 20,

    alignItems: 'center',
    backgroundColor: '#FDF2E6',
    borderRadius: 12,
    justifyContent: 'center',
  },

  TextInput: {
    fontFamily: 'VarelaRound-Regular',
    width: '90%',
    flex: 1,
    color: '#003f5c',
    // textAlign: 'center',
  },

  forgot_button: {
    fontFamily: 'VarelaRound-Regular',
  },
  create_acc_button: {
    fontFamily: 'VarelaRound-Regular',
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#32a838',
  },

  signIn: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#71BF61',
    // left: 1,
  },

  button: {
    alignItems: 'center',
    marginTop: 50,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-Regular',
  },

  // /* Rectangle 2 */
  username_container: {
    position: 'absolute',
    width: 327,
    height: 66,
    left: 24,
    top: 226,

    backgroundColor: '#E89023',
    borderRadius: 12,
  },

  loading: {
    position: 'absolute',
    // left: 0,
    // right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{scale: 2.5}],
  },
  text_footer: {
    color: '#E89023',
    fontSize: 18,
    fontFamily: 'VarelaRound-Regular',
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
});
