import {tsNamedTupleMember} from '@babel/types';
import {CommonActions} from '@react-navigation/routers';
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
  Alert,
} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Account'>;
  route: RouteProp<RootStackParamList, 'Account'>;
};

const AccountScreen = ({route, navigation}: Props) => {
  const [user, setUser] = React.useState({
    email: route.params.user.email,
    fname: route.params.user.fname,
    lname: route.params.user.lname,
    id: route.params.user.id,
  });

  const [logOut, setLogOut] = React.useState(false);

  useEffect(() => {
    if (logOut) {
      navigation.dispatch(
        CommonActions.reset({index: 0, routes: [{name: 'Landing'}]}),
      );
    }
    setLogOut(false);
  }, [logOut]);

  return (
    <View style={styles.container}>
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
            {user.fname} {user.lname}
          </Text>
          <Text style={[styles.userInfoText, {fontSize: 14, margin: 1}]}>
            {user.email}
          </Text>
        </View>
      </View>
      <View style={[styles.optionContainer]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PaymentMethods', {user});
          }}
          style={styles.accountEditOption}>
          <View style={styles.optionInfoContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../assets/credit_card.png')}
                resizeMode="stretch"
              />
            </View>

            <View style={styles.optionTextContainer}>
              <Text style={[styles.userInfoText, {fontSize: 15}]}>
                Payment Methods
              </Text>
              <Text
                style={[
                  styles.userInfoText,
                  {color: '#999999'},
                  {fontSize: 11},
                ]}>
                See currently saved card info
              </Text>
            </View>
          </View>
          <Image source={require('../assets/chevron_pointing_right.png')} />
        </TouchableOpacity>
      </View>
      <View style={[styles.optionContainer]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditAccount', {user});
          }}
          style={styles.accountEditOption}>
          <View style={styles.optionInfoContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../assets/account_icon_dark.png')}
                resizeMode="stretch"
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
                Email, Name, Password
              </Text>
            </View>
          </View>
          <Image source={require('../assets/chevron_pointing_right.png')} />
          {/* </View> */}
        </TouchableOpacity>
      </View>
      <View style={[styles.optionContainer]}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Log out', 'Are you sure you want to log out?', [
              {text: 'Cancel', style: 'cancel'},
              {
                text: 'Log out',
                style: 'default',
                onPress: () => setLogOut(true),
              },
            ]);
          }}
          style={styles.accountEditOption}>
          <View style={styles.optionInfoContainer}>
            <View style={styles.optionTextContainer}>
              <Text style={[styles.userInfoText, {fontSize: 15}]}>Log Out</Text>
            </View>
          </View>
          <Image source={require('../assets/chevron_pointing_right.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
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

    backgroundColor: '#F3F3F3',
    // borderColor: '#BBBBBB',
    width: '100%',
    // backgroundColor: 'black',
    paddingVertical: 20,
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  accountEditOption: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    height: 55,
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
  logOutPrompContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'grey',
  },
});

export default AccountScreen;
