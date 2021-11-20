import {StackNavigationProp} from '@react-navigation/stack';
import {print, validate} from 'graphql';
import React, {useEffect, useRef} from 'react';
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
  Alert,
  ActivityIndicator,
} from 'react-native';
// import {CREATE_ACCOUNT} from '../graphql/queries';
import {ApolloError, useMutation, useQuery} from '@apollo/client';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {CREATE_ACCOUNT} from '../graphql/mutations';
import {AUTHENTICATE} from '../graphql/queries';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Create'>;
};
const CreateAccountScreen = ({navigation}: Props) => {
  const [submitted, setSubmitted] = React.useState(false);

  const [mutateFunction, {data, loading, error}] = useMutation(CREATE_ACCOUNT, {
    onError: err => {
      console.log(err);
    },
  });

  const [user, setUser] = React.useState({
    email: '',
    emailValidated: true,
    password: '',
    passwordValidated: true,
    firstName: '',
    firstNameValidated: true,
    lastName: '',
    lastNameValidated: true,
    confirmPassword: '',
    passwordConfirmed: true,
  });

  useEffect(() => {
    if (
      (user.emailValidated == false ||
        user.passwordValidated == false ||
        user.firstNameValidated == false ||
        user.lastNameValidated == false ||
        user.passwordConfirmed == false) &&
      submitted == true
    ) {
      setSubmitted(false);
      return Alert.alert(
        'Please enter valid credentials',
        'Please make sure fields are not blank and that passwords match.',
      );
    }
    if (
      user.emailValidated == true &&
      user.passwordValidated == true &&
      user.firstNameValidated == true &&
      user.lastNameValidated == true &&
      user.passwordConfirmed == true &&
      submitted == true
    ) {
      setSubmitted(false);
      mutateFunction({
        variables: {
          email: user.email,
          pass: user.password,
          fname: user.firstName,
          lname: user.lastName,
        },
      });
      navigation.navigate('Login');
    }
  }, [user]);

  const validateEmail = (text: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (text.trim().length == 0 || reg.test(text) === false) {
      // setUser({...user, emailValidated: false});
      return false;
    } else {
      // setUser({...user, email: text, emailValidated: true});
      return true;
    }
  };
  const validatePassword = (text: string) => {
    if (text.trim().length < 8) {
      // setUser({...user, passwordValidated: false});
      return false;
    } else {
      // setUser({...user, password: text, passwordValidated: true});
      return true;
    }
  };
  const confirmPassword = (text: string) => {
    if (text.trim().length == 0 || text != user.password) {
      // setUser({...user, passwordConfirmed: false});
      return false;
    } else {
      // setUser({...user, confirmPassword: text, passwordConfirmed: true});
      return true;
    }
  };
  const validateFirstName = (text: string) => {
    if (text.trim().length == 0) {
      // setUser({...user, firstNameValidated: false});
      return false;
    } else {
      // setUser({...user, firstName: text, firstNameValidated: true});
      return true;
    }
  };
  const validateLastName = (text: string) => {
    if (text.trim().length == 0) {
      // setUser({...user, lastNameValidated: false});
      return false;
    } else {
      // setUser({...user, lastName: text, lastNameValidated: true});
      return true;
    }
  };

  return (
    <View style={submitted ? styles.containerLoading : styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/freshpass_logo.png')} />
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Email</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setUser({
                  ...user,
                  email: val,
                  emailValidated: validateEmail(val),
                })
              }
            />
          </View>
          {!user.emailValidated ? (
            <Text style={styles.errorText}>
              * Please enter a valid Email address
            </Text>
          ) : null}
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>First Name</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Your First Name"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setUser({
                  ...user,
                  firstName: val,
                  firstNameValidated: validateFirstName(val),
                })
              }
            />
          </View>
          {!user.firstNameValidated ? (
            <Text style={styles.errorText}>* Please enter a first name</Text>
          ) : null}
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Last Name</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Your Last Name"
              placeholderTextColor="#003f5c"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setUser({
                  ...user,
                  lastName: val,
                  lastNameValidated: validateLastName(val),
                })
              }
            />
          </View>
          {!user.lastNameValidated ? (
            <Text style={styles.errorText}>* Please enter a last name</Text>
          ) : null}
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Password</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setUser({
                  ...user,
                  password: val,
                  passwordValidated: validatePassword(val),
                })
              }
            />
          </View>
          {!user.passwordValidated ? (
            <Text style={styles.errorText}>
              * Password must contain at least 8 characters
            </Text>
          ) : null}
          <TouchableOpacity
          //onPress={updateSecureTextEntry}
          ></TouchableOpacity>
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Confirm Password</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Confirm Your Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val =>
                setUser({
                  ...user,
                  confirmPassword: val,
                  passwordConfirmed: confirmPassword(val),
                })
              }
            />
          </View>
          {!user.passwordConfirmed ? (
            <Text style={styles.errorText}>* Passwords must match</Text>
          ) : null}
          <TouchableOpacity></TouchableOpacity>
        </View>
        {/* </View> */}
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By signing up you agree to our
          </Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
            {' '}
            Terms of service
          </Text>
          <Text style={styles.color_textPrivate}> and</Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
            {' '}
            Privacy policy
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              setUser({
                ...user,
                emailValidated: validateEmail(user.email),
                passwordValidated: validatePassword(user.password),
                firstNameValidated: validateFirstName(user.firstName),
                lastNameValidated: validateLastName(user.lastName),
                passwordConfirmed: confirmPassword(user.confirmPassword),
              });
              setSubmitted(true);
            }}
            style={[
              styles.signIn,
              {
                borderColor: '#71BF61',
                backgroundColor: '#71BF61',
                borderWidth: 1,
                marginTop: 10,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#FFFFFF',
                },
              ]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {submitted ? (
        <ActivityIndicator size="large" style={styles.loading} color="green" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    opacity: 0.6,
  },

  imageContainer: {
    alignItems: 'center',
    // resizeMode: 'contain',
    // flex: 1,
    // position: 'absolute',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: -50,
    // marginTop: 100,
    // backgroundColor: 'black',
  },
  inputView: {
    width: 324,
    height: 55,
    // marginBottom: 20,

    backgroundColor: '#FDF2E6',
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
  },

  scrollContainer: {
    alignItems: 'center',
    // paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'android' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'VarelaRound-Regular',
  },
  text_footer: {
    color: '#E89023',
    fontSize: 18,
    fontFamily: 'VarelaRound-Regular',
    marginVertical: 5,
  },
  action: {
    height: 130,
    // justifyContent: 'space-evenly',
    // backgroundColor: 'black',
  },
  textInput: {
    // flex: 1,
    // marginTop: Platform.OS === 'android' ? 0 : -12,
    // paddingLeft: 10,
    // height: 55,
    color: '#003f5c',
    width: '90%',
    fontFamily: 'VarelaRound-Regular',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    // marginTop: 10,
  },
  signIn: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
    justifyContent: 'center',
    fontFamily: 'VarelaRound-Regular',
  },
  color_textPrivate: {
    color: 'green',
  },
  errorText: {
    color: 'red',
    fontFamily: 'VarelaRound-Regular',
    marginTop: 5,
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

export default CreateAccountScreen;
