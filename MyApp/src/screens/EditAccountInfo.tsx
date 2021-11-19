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
  const [user, setUser] = React.useState({
    email: 'andrewbaltazar@gmail.com',
    fname: 'andrew',
    lname: 'baltazar',
    password: 'andrewbaltazar',
    stateHasBeenChanged: false,
    inInitialState: true,
  });

  // const changedEmail = (val: any) => {
  //   setData({
  //     ...data,
  //     email: val,
  //     stateHasBeenChanged: true,
  //     inInitialState: false,
  //   });
  // };

  // const changedUsername = (val: any) => {
  //   setData({
  //     ...data,
  //     username: val,
  //     stateHasBeenChanged: true,
  //     inInitialState: false,
  //   });
  // };

  // const changedName = (val: any) => {
  //   setData({
  //     ...data,
  //     name: val,
  //     stateHasBeenChanged: true,
  //     inInitialState: false,
  //   });
  // };

  // const saveState = () => {
  //   setData({
  //     ...data,
  //     stateHasBeenChanged: false,
  //     inInitialState: false,
  //   });
  // };

  // const getSaveStyling = () => {
  //   if (data.stateHasBeenChanged == false) {
  //     return styles.greyedOutSave;
  //   } else {
  //     return styles.save;
  //   }
  // };

  // const getSaveTextStyling = () => {
  //   if (data.stateHasBeenChanged == false) {
  //     return styles.greyedOutTextSaveButton;
  //   } else {
  //     return styles.textSaveButton;
  //   }
  // };

  // const getSavedNotif = () => {
  //   if (data.stateHasBeenChanged == false && data.inInitialState == false) {
  //     return styles.savedNotif;
  //   } else {
  //     return styles.hiddenSavedNotif;
  //   }
  // };
  const obscurePassword = (password: string) => {
    const hidden = Array.from(password).map(char => {
      return '*';
    });

    return hidden;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>First Name:</Text>
          <TextInput style={styles.userDataTextInput}>{user.fname}</TextInput>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Last Name:</Text>
          <TextInput style={styles.userDataTextInput}>{user.lname}</TextInput>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Email:</Text>
          {/* <TouchableOpacity style={styles.editButton}>
            <Text>Edit</Text>
          </TouchableOpacity> */}
          <View style={styles.userDataView}>
            <Text style={[styles.userDataText, {opacity: 0.5}]}>
              {user.email}
            </Text>
          </View>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Password</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('ChangePassword')}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <View style={styles.userDataView}>
            <Text style={[styles.userDataText, {opacity: 0.5}]}>
              {obscurePassword(user.password)}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    // justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '45%',
    height: 85,
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  largeItemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '95%',
    height: 85,
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 15,
    flexWrap: 'wrap',
  },
  userDataView: {
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 10,
  },
  itemText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
  },
  userDataText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
  },
  userDataTextInput: {
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingHorizontal: 10,
    color: 'black',
    marginVertical: 10,
    // borderColor: '#999999',
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontSize: 20,
  },
  editButton: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#E89023',
    height: 25,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 18,
  },
  saveButton: {
    marginVertical: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 324,
    backgroundColor: '#71BF61',
    borderRadius: 12,
  },
});

export default EditAccountInfoScreen;
