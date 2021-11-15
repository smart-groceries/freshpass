import {StackNavigationProp} from '@react-navigation/stack';
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
  Image,
  Alert,
} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Create'>;
};
const CreateAccountScreen = ({navigation}: Props) => {
  // const [data, setData] = React.useState({
  //   email: '',
  //   password: '',
  //   confirm_password: '',
  //   check_textInputChange: true,
  //   secureTextEntry: true,
  //   confirm_secureTextEntry: true,
  // });
  const [email, setEmail] = React.useState({
    email: '',
    valid: true,
  });
  const [password, setPassword] = React.useState({
    password: '',
    valid: true,
  });
  const [passwordConfirm, setPasswordConfirm] = React.useState({
    passwordConfirm: '',
    valid: true,
  });
  // const [validation, setValidation] = React.useState({
  //   validation: false,
  // });

  // const textInputChange = (val: any) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };
  const validateEmail = (text: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false || text.length === 0) {
      setEmail({email: text, valid: false});
    } else {
      setEmail({email: text, valid: true});
    }
  };
  const validatePassword = (text: string) => {
    if (text.length < 8) {
      setPassword({password: text, valid: false});
    } else {
      setPassword({password: text, valid: true});
    }
  };
  const confirmPassword = (text: string) => {
    if (text != password.password) {
      passwordConfirm.passwordConfirm = text;
      passwordConfirm.valid = false;
    } else {
      passwordConfirm.passwordConfirm = text;
      passwordConfirm.valid = true;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/freshpass_logo.png')} />
        </View>
        {/* <View> */}
        {/* <View style={styles.action}>
          <Text style={styles.text_footer}>Username</Text>
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#3A3B3E"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
        </View> */}

        <View style={styles.action}>
          <Text style={[styles.text_footer]}>Email</Text>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#3A3B3E"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => validateEmail(val)}
          />
          {email.valid == false ? (
            <Text style={styles.errorText}>
              * Please enter a valid E-Mail address to proceed
            </Text>
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
          {password.valid == false ? (
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
          {passwordConfirm.valid == false ? (
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
              validateEmail(email.email);
              validatePassword(password.password);
              if (!email.valid && !password.valid)
                return Alert.alert(
                  'Please enter valid credentials',
                  'Please make sure the E-Mail and Password fields are not blank and that passwords match.',
                );
              else {
                navigation.navigate('Home');
              }
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
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
});

export default CreateAccountScreen;
