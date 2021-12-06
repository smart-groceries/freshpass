import {NavigationContainer} from '@react-navigation/native';
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
} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Forgot'>;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
  // const [data, setData] = React.useState({
  //   email: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   confirm_secureTextEntry: true,
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
  const [email, setEmail] = React.useState({
    email: '',
    emailValidated: true,
  });
  const [submitted, setSubmitted] = React.useState(false);

  useEffect(() => {
    if (email.emailValidated == true && submitted == true) {
      setSubmitted(false);
      navigation.navigate('PasswordResetLinkSent');
    }
    setSubmitted(false);
  }, [email]);

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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image source={require('../assets/freshpass_logo.png')} />
      </View>
      <Text style={[styles.color_textPrivate, {marginVertical: 25}]}>
        Enter your email to receive a password reset link:
      </Text>

      <View style={styles.inputView}>
        <TextInput
          placeholder="Your Email"
          placeholderTextColor="#003f5c"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={val =>
            setEmail({...email, email: val, emailValidated: validateEmail(val)})
          }
        />
      </View>
      {!email.emailValidated ? (
        <Text style={styles.errorText}>
          * Please enter a valid email address
        </Text>
      ) : null}

      <View style={{position: 'relative', top: 100, alignItems: 'center'}}>
        <View style={styles.button}>
          {/* <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Sign Up</Text>
                  </LinearGradient> */}

          <TouchableOpacity
            //onPress={() => navigation.goBack()}
            style={[
              styles.reset,
              {
                backgroundColor: '#71BF61',
              },
            ]}
            onPress={() => {
              setEmail({...email, emailValidated: validateEmail(email.email)}),
                setSubmitted(true);
            }}>
            <Text
              style={[
                styles.textResetButton,
                {
                  color: '#FFFFFF',
                },
              ]}>
              Reset
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.link}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      {submitted ? (
        <ActivityIndicator size="large" color="green" style={styles.loading} />
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

  link: {
    fontFamily: 'VarelaRound-Regular',
    // fontWeight: 'bold',
  },
  linkContainer: {
    margin: 10,
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
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? 0 : -12,
    // paddingLeft: 10,
    // height: 55,
    // backgroundColor: '#FDF2E6',
    fontFamily: 'VarelaRound-Regular',
    // borderRadius: 12,
    color: '#003f5c',
    // position: 'absolute',
    width: '90%',
    // left: 34,
  },
  button: {
    marginTop: '30%',
    alignItems: 'center',
  },
  reset: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    left: 1,
  },
  textResetButton: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    fontFamily: 'VarelaRound-Regular',
    textAlign: 'center',
  },
  color_textPrivate: {
    color: '#B3B3B3',
    textAlign: 'center',
    fontFamily: 'VarelaRound-Regular',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: -50,
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
  errorText: {
    color: 'red',
    fontFamily: 'VarelaRound-Regular',
    // marginTop: 5,
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
});

export default ForgotPasswordScreen;
