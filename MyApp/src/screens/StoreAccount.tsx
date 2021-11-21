import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

const StoreAccountScreen = () => {
  const [data, setData] = React.useState({
    email: 'store@gmail.com',
    name: 'Store McStoreFace',
  });
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.text_header, {marginTop: 65}]}>
        Account Settings
      </Text> */}
      <View style={[styles.userInfo]}>
        <Image
          source={require('../assets/profile_photo.png')}
          style={[{borderRadius: 20, marginRight: 15}]}
        />
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text style={[styles.userInfoText, {fontSize: 20, margin: 1}]}>
            {data.name}
          </Text>
          <Text style={[styles.userInfoText, {fontSize: 14, margin: 1}]}>
            {data.email}
          </Text>
        </View>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.accountEditOption}>
          {/* <View style={[styles.accountEditOption, {marginTop: 48}]}> */}
          <View style={styles.optionInfoContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../assets/credit_card.png')}
                resizeMode="stretch"
                // style={styles.icon}
              />
            </View>

            <View style={styles.optionTextContainer}>
              <Text style={[styles.userInfoText, {fontSize: 15}]}>
                Payment Settings
              </Text>
              <Text
                style={[
                  styles.userInfoText,
                  {color: '#999999'},
                  {fontSize: 11},
                ]}>
                See currently saved Bank info
              </Text>
            </View>
          </View>
          <Image source={require('../assets/chevron_pointing_right.png')} />
          {/* </View> */}
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.accountEditOption}>
          <View style={styles.optionInfoContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../assets/account_icon_dark.png')}
                resizeMode="stretch"
                // style={styles.icon}
              />
            </View>

            <View style={styles.optionTextContainer}>
              <Text style={[styles.userInfoText, {fontSize: 15}]}>
                Account Information
              </Text>
              <Text
                style={[
                  styles.userInfoText,
                  {color: '#999999'},
                  {fontSize: 11},
                ]}>
                Profile, Password
              </Text>
            </View>
          </View>
          <Image source={require('../assets/chevron_pointing_right.png')} />
          {/* </View> */}
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.accountEditOption}>
          <View style={styles.optionInfoContainer}>
            <View style={styles.optionTextContainer}>
              <Text style={[styles.userInfoText, {fontSize: 15}]}>Log Out</Text>
            </View>
          </View>
          <Image source={require('../assets/chevron_pointing_right.png')} />
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text_header: {
    color: '#424347',
    // fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',
    fontFamily: 'VarelaRound-Regular',
    // left: 20,
  },
  text_footer: {
    color: '#424347',
    fontSize: 16,
    fontFamily: 'VarelaRound-Regular',
    // left: 24,
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
    paddingLeft: 10,
    height: 50,
    backgroundColor: '#F5F5F5',
    fontFamily: 'VarelaRound-Regular',
    borderRadius: 5,
    position: 'absolute',
    width: 324,
    // left: 34,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  greyedOutSave: {
    width: 324,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    marginTop: 175,
    // left: 1,
  },
  save: {
    width: 324,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#71BF61',
    backgroundColor: '#71BF61',
    borderWidth: 1,
    marginTop: 175,
    // left: 1,
  },
  textSaveButton: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-Regular',
    color: '#FFFFFF',
  },
  greyedOutTextSaveButton: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-Regular',
    color: '#DCDCDC',
  },
  logOutButton: {
    marginTop: 125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71BF61',
    width: 324,
    height: 55,
    borderRadius: 12,
    alignSelf: 'center',
  },
  logOutButtonText: {
    color: '#424347',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
  },
  userInfo: {
    // left: 24,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    marginVertical: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoText: {
    color: '#424347',
    fontFamily: 'VarelaRound-Regular',
  },
  optionContainer: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // borderTopWidth: 1,
    // borderColor: '#BBBBBB',
    width: '100%',
    // backgroundColor: 'black',
    paddingVertical: 20,
    height: 75,
  },
  accountEditOption: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'grey',
    height: '100%',
  },
  optionInfoContainer: {
    // backgroundColor: 'black',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '100%',
  },
  optionTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'red',
    height: '100%',
    width: '80%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'blue',
    // height: '100%',
    alignSelf: 'center',
    width: 35,
    height: 35,
  },
  icon: {
    // width: '90%',
    // height: '60%',
  },
});

export default StoreAccountScreen;