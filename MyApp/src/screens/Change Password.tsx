import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ChangePassword'>;
};

const ChangePasswordScreen = ({navigation}: Props) => {
  const [user, setUser] = React.useState({
    email: '',
    fname: '',
    lname: '',
    password: 'andrewbaltazar',
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Current Password:</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder="Old Password"
            secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>New Password:</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder="New Password"
            secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Confirm New Password:</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder="Confirm New Password"
            secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            {'\u2B24'} Password needs to be at least 8 characters in length
          </Text>
        </View>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
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
  instructionContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '95%',
    // height: 85,
    margin: 25,
  },
  instructionText: {
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'VarelaRound-Regular',
  },
  resetButtonText: {
    fontSize: 18,
  },
  resetButton: {
    marginTop: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 324,
    backgroundColor: '#71BF61',
    borderRadius: 25,
  },
});

export default ChangePasswordScreen;
