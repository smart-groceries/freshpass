import {NavigationContainer} from '@react-navigation/native';
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
} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Forgot'>;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
  const [data, setData] = React.useState({
    email: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val: any) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image source={require('../assets/freshpass_logo.png')} />
      </View>
      <ScrollView>
        <Text style={[styles.color_textPrivate, {marginTop: 25}]}>
          Enter your email to receive a password reset link:
        </Text>
        <Text style={[styles.text_footer, {marginTop: 25}, {marginLeft: 17}]}>
          Email
        </Text>
        <View style={[styles.action, {marginTop: 14}]}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#3A3B3E"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
        </View>

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
                borderColor: '#71BF61',
                backgroundColor: '#71BF61',
                borderWidth: 1,
                marginTop: 200,
              },
            ]}>
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
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Cancel</Text>
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
    fontFamily: 'varelaround-regular',
    // fontWeight: 'bold',
  },
  linkContainer: {
    margin: 10,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'VarelaRound-regular',
  },
  text_footer: {
    color: '#E89023',
    fontSize: 18,
    fontFamily: 'VarelaRound-regular',
    left: -10,
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
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    height: 66,
    backgroundColor: '#FDF2E6',
    fontFamily: 'VarelaRound-regular',
    borderRadius: 12,
    position: 'absolute',
    width: 324,
    // left: 34,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  reset: {
    width: 324,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    left: 1,
  },
  textResetButton: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    fontFamily: 'VarelaRound-regular',
    textAlign: 'center',
  },
  color_textPrivate: {
    color: '#B3B3B3',
    textAlign: 'center',
    fontFamily: 'VarelaRound-regular',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    resizeMode: 'contain',
    marginTop: 175,
  },
});

export default ForgotPasswordScreen;
