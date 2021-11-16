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
import Spinner from 'react-native-spinkit';
import {RootStackParamList} from '../navigation/RootStackParamList';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Create'>;
};
const CreateAccountScreen = ({navigation}: Props) => {
  // const [email, setEmail] = React.useState('');
  // const [emailValidated, setEmailValidated] = React.useState(true);
  // const [password, setPassword] = React.useState('');
  // const [passwordValidated, setPasswordValidated] = React.useState(true);
  // const [passwordConfirm, setPasswordConfirm] = React.useState('');
  // const [passwordConfirmed, setPasswordConfirmed] = React.useState(true);
  // const [firstName, setFirstName] = React.useState('');
  // const [firstNameValidated, setFirstNameValidated] = React.useState(true);
  // const [lastName, setLastName] = React.useState('');
  // const [lastNameValidated, setLastNameValidated] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);

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

  // const validateAll = () => {
  //   validateEmail(user.email);
  //   validatePassword(user.password);
  //   validateFirstName(user.firstName);
  //   validateLastName(user.lastName);
  //   confirmPassword(user.confirmPassword);
  // };
  // useEffect(() => {
  //   if (submitted) {
  //     validateEmail(user.email);
  //     validatePassword(user.password);
  //     validateFirstName(user.firstName);
  //     validateLastName(user.lastName);
  //     confirmPassword(user.confirmPassword);
  //   }
  //   setSubmitted(false);
  // }, [submitted]);

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
      navigation.navigate('Home');
    }
  }, [user]);
  // useEffect(() => {}, [user.password]);
  // useEffect(() => {}, [user.firstName]);
  // useEffect(() => {}, [user.lastName]);
  // useEffect(() => {}, [user.confirmPassword]);

  const validateEmail = (text: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (text.trim().length === 0 || reg.test(text) === false) {
      setUser({...user, emailValidated: false});
    } else {
      setUser({...user, email: text, emailValidated: true});
    }
  };
  const validatePassword = (text: string) => {
    if (text.trim().length < 8) {
      setUser({...user, passwordValidated: false});
    } else {
      setUser({...user, password: text, passwordValidated: true});
    }
  };
  const confirmPassword = (text: string) => {
    if (text.trim().length == 0 || text != user.password) {
      setUser({...user, passwordConfirmed: false});
    } else {
      setUser({...user, confirmPassword: text, passwordConfirmed: true});
    }
  };
  const validateFirstName = (text: string) => {
    if (text.trim().length == 0) {
      setUser({...user, firstNameValidated: false});
    } else {
      setUser({...user, firstName: text, firstNameValidated: true});
    }
  };
  const validateLastName = (text: string) => {
    if (text.trim().length == 0) {
      setUser({...user, lastNameValidated: false});
    } else {
      setUser({...user, lastName: text, lastNameValidated: true});
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
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#3A3B3E"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => validateEmail(val)}
          />
          {!user.emailValidated ? (
            <Text style={styles.errorText}>
              * Please enter a valid Email address
            </Text>
          ) : null}
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>First Name</Text>
          <TextInput
            placeholder="Your First Name"
            placeholderTextColor="#3A3B3E"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => validateFirstName(val)}
          />
          {!user.firstNameValidated ? (
            <Text style={styles.errorText}>* Please enter a first name</Text>
          ) : null}
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Last Name</Text>
          <TextInput
            placeholder="Your Last Name"
            placeholderTextColor="#3A3B3E"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => validateLastName(val)}
          />
          {!user.lastNameValidated ? (
            <Text style={styles.errorText}>* Please enter a last name</Text>
          ) : null}
        </View>

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Password</Text>
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#3A3B3E"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => validatePassword(val)}
          />
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
          <TextInput
            placeholder="Confirm Your Password"
            placeholderTextColor="#3A3B3E"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => confirmPassword(val)}
          />
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
              validateEmail(user.email);
              validatePassword(user.password);
              validateFirstName(user.firstName);
              validateLastName(user.lastName);
              confirmPassword(user.confirmPassword);
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
              Sign In
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
    resizeMode: 'contain',
    flex: 1,
    // position: 'absolute',
    justifyContent: 'center',
    // marginTop: 100,
    // backgroundColor: 'black',
  },

  scrollContainer: {
    alignItems: 'center',
    paddingTop: 50,
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
    margin: 5,
  },
  action: {
    // flexDirection: 'row',
    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#FFFFFF',
    // paddingBottom: 5,
    // margin: 10,
    // height: 100,
    height: 125,
    // margin: 10,
    width: 324,
    // backgroundColor: 'black',
  },
  textInput: {
    // flex: 1,
    // marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    height: 55,
    fontFamily: 'VarelaRound-Regular',
    backgroundColor: '#FDF2E6',
    borderRadius: 12,
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
