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
import {StackNavigationProp} from '@react-navigation/stack';
// import LottieSuccessAnimation from '../components/lottie-components/success';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_ID} from '../graphql/queries';

type Props = {navigation: StackNavigationProp<RootStackParamList, 'Landing'>};

const LandingPage = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image source={require('../assets/freshpass_logo.png')} />
      </View>
      <Text
        style={[
          styles.previewText,
          {marginTop: 25},
          {fontWeight: 'bold'},
          {fontSize: 20},
        ]}>
        Grocery Shopping Reimagined
      </Text>
      <Text style={[styles.previewText, {marginTop: 25}, {fontSize: 14}]}>
        Traditionally, a trip to the grocery store is
      </Text>
      <Text style={[styles.previewText, {marginTop: 5}, {fontSize: 14}]}>
        filled with long lines and wasted time
      </Text>
      <Text style={[styles.previewText, {marginTop: 5}, {fontSize: 14}]}>
        searching. With FreshPass, that is a thing
      </Text>
      <Text style={[styles.previewText, {marginTop: 5}, {fontSize: 14}]}>
        of the past.
      </Text>
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
          onPress={() => navigation.navigate('Login')}
          style={[
            styles.signUp,
            {
              // borderColor: '#E89023',
              backgroundColor: '#71BF61',
              // borderWidth: 1,
              // marginTop: 125,
              margin: 10,
            },
          ]}>
          <Text
            style={[
              styles.textButton,
              {
                color: '#FFFFFF',
              },
            ]}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Create')}
          style={[
            styles.signUp,
            {
              // borderColor: '#71BF61',
              backgroundColor: '#E89023',
              // borderWidth: 1,
              margin: 10,
            },
          ]}>
          <Text
            style={[
              styles.textButton,
              {
                color: '#FFFFFF',
              },
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    left: 24,
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
    fontFamily: 'VarelaRound-Regular',
    borderRadius: 12,
    position: 'absolute',
    width: 324,
    left: 34,
  },
  button: {
    alignItems: 'center',
    position: 'relative',
    top: 120,
  },
  signUp: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    left: 1,
  },
  textButton: {
    fontSize: 16,
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
  previewText: {
    color: '#B3B3B3',
    textAlign: 'center',
    fontFamily: 'VarelaRound-Regular',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    // resizeMode: 'contain',
    marginTop: 50,
    marginBottom: -50,
    // backgroundColor: 'black',
  },
  storeLottie: {
    width: 100,
    height: 100,
  },
});

export default LandingPage;
