import {tsNamedTupleMember} from '@babel/types';
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
  navigation: StackNavigationProp<RootStackParamList, 'EditAccount'>;
};

const EditAccountInfoScreen = ({navigation}: Props) => {
  const [data, setData] = React.useState({
    email: 'hello1',
    username: 'hello2',
    name: 'hello3',
    password: 'hello4',
    stateHasBeenChanged: false,
    inInitialState: true,
  });

  const changedEmail = (val: any) => {
    setData({
      ...data,
      email: val,
      stateHasBeenChanged: true,
      inInitialState: false,
    });
  };

  const changedUsername = (val: any) => {
    setData({
      ...data,
      username: val,
      stateHasBeenChanged: true,
      inInitialState: false,
    });
  };

  const changedName = (val: any) => {
    setData({
      ...data,
      name: val,
      stateHasBeenChanged: true,
      inInitialState: false,
    });
  };

  const saveState = () => {
    setData({
      ...data,
      stateHasBeenChanged: false,
      inInitialState: false,
    });
  };

  const getSaveStyling = () => {
    if (data.stateHasBeenChanged == false) {
      return styles.greyedOutSave;
    } else {
      return styles.save;
    }
  };

  const getSaveTextStyling = () => {
    if (data.stateHasBeenChanged == false) {
      return styles.greyedOutTextSaveButton;
    } else {
      return styles.textSaveButton;
    }
  };

  const getSavedNotif = () => {
    if (data.stateHasBeenChanged == false && data.inInitialState == false) {
      return styles.savedNotif;
    } else {
      return styles.hiddenSavedNotif;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Text style={[styles.text_header, {marginTop: 60}]}>Account Info</Text>
      <ScrollView>
        <Text style={[styles.text_footer, {marginTop: 50}, {marginLeft: 17}]}>
          Email
        </Text>
        <View style={[styles.action, {marginTop: 14}]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#C8C8C8"
            defaultValue={data.email}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => changedEmail(val)}
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 50}, {marginLeft: 17}]}>
          Username
        </Text>
        <View style={[styles.action, {marginTop: 14}]}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#C8C8C8"
            defaultValue={data.username}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => changedUsername(val)}
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 50}, {marginLeft: 17}]}>
          Name
        </Text>
        <View style={[styles.action, {marginTop: 14}]}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#C8C8C8"
            defaultValue={data.name}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => changedName(val)}
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 50}, {marginLeft: 17}]}>
          Password
        </Text>
        <View style={[styles.action, {marginTop: 14}]}>
          <View style={styles.textInput}>
            <Text
              style={[
                {color: '#C8C8C8'},
                {fontSize: 20},
                {justifyContent: 'center'},
                {flexDirection: 'row'},
                {marginTop: 16},
              ]}>
              *************
            </Text>
          </View>
        </View>

        <View style={styles.forgotPasswordButton}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordButtonText}>
              To reset your password, please click here
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            {marginTop: 60},
            {justifyContent: 'center'},
            {alignItems: 'center'},
          ]}>
          <Text style={getSavedNotif()}>Account Info Saved!</Text>
        </View>

        <View style={styles.button}>
          {/* <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signI
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Sign Up</Text>
                  </LinearGradient> */}

          <TouchableOpacity
            onPress={() => saveState()}
            style={getSaveStyling()}>
            <Text style={getSaveTextStyling()}>Save</Text>
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
  },
  text_header: {
    color: '#424347',
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'VarelaRound-Regular',
  },
  text_footer: {
    color: '#424347',
    fontSize: 16,
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
    height: 50,
    backgroundColor: '#F5F5F5',
    fontFamily: 'VarelaRound-Regular',
    borderRadius: 5,
    position: 'absolute',
    width: 324,
    left: 34,
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
    marginTop: 100,
    left: 1,
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
    marginTop: 100,
    left: 1,
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
  forgotPasswordButton: {
    marginTop: 40,
    left: 34,
  },
  forgotPasswordButtonText: {
    color: '#B3B3B3',
  },
  savedNotif: {
    color: '#424347',
    fontSize: 16,
    fontFamily: 'VarelaRound-Regular',
  },
  hiddenSavedNotif: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'VarelaRound-Regular',
  },
});

export default EditAccountInfoScreen;
