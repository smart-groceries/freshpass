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
} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Create'>;
};
const CreateAccountScreen = ({navigation}: Props) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val: any) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/freshpass_logo.png')} />
        </View>
        <View>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Username"
              placeholderTextColor="#3A3B3E"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
          </View>

          <Text style={[styles.text_footer]}>Email</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#3A3B3E"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
          </View>

          <Text style={[styles.text_footer]}>Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#3A3B3E"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              //onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
            //onPress={updateSecureTextEntry}
            ></TouchableOpacity>
          </View>

          <Text style={[styles.text_footer]}>Confirm Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Confirm Your Password"
              placeholderTextColor="#3A3B3E"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
            />
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
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
            onPress={() => navigation.navigate('Home')}
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
    // position: 'absolute',
    // justifyContent: 'center',
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
    fontFamily: 'VarelaRound-regular',
  },
  text_footer: {
    color: '#E89023',
    fontSize: 18,
    fontFamily: 'VarelaRound-regular',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  action: {
    // flexDirection: 'row',
    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#FFFFFF',
    // paddingBottom: 5,

    backgroundColor: '#FDF2E6',
    borderRadius: 12,
    width: 324,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    width: '90%',
    height: 66,
    fontFamily: 'VarelaRound-regular',
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
    fontFamily: 'VarelaRound-regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
    justifyContent: 'center',
    fontFamily: 'VarelaRound-regular',
  },
  color_textPrivate: {
    color: 'green',
  },
});

export default CreateAccountScreen;
