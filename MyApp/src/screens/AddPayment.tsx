import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  Switch,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {placeholder} from '@babel/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

export default function AddPayment() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [selectedMonth, setSelectedMonth] = useState();
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    // <View style={styles.mainContainer}>
    //   {/* <View style={styles.container_}> */}
    //   <View style={styles.inputView}>
    //     <TextInput
    //       style={styles.inputName}
    //       placeholder="Name on Card"
    //       placeholderTextColor="#E4E4E4"
    //       onChangeText={name => setName(name)}
    //     />
    //   </View>

    //   <View style={styles.inputView}>
    //     <TextInput
    //       style={styles.inputCard}
    //       placeholder="Card Number"
    //       placeholderTextColor="#E4E4E4"
    //       onChangeText={carnumber => setEmail(carnumber)}
    //       keyboardType="numeric"
    //     />
    //   </View>
    //   {/* </View> */}

    //   <View style={styles.inputView2}>
    //     {/* <View style={styles.pickerContainer}> */}
    //     {/* <Picker
    //       style={styles.inputMonth}
    //       selectedValue={selectedMonth}
    //       onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}>
    //       <Picker.Item label="Month" value="Month" />
    //       <Picker.Item label="January" value="January" />
    //       <Picker.Item label="February" value="February" />
    //       <Picker.Item label="March" value="March" />
    //       <Picker.Item label="April" value="April" />
    //       <Picker.Item label="May" value="May" />
    //       <Picker.Item label="June" value="June" />
    //       <Picker.Item label="July" value="July" />
    //       <Picker.Item label="August" value="August" />
    //       <Picker.Item label="September" value="September" />
    //       <Picker.Item label="October" value="October" />
    //       <Picker.Item label="November" value="November" />
    //       <Picker.Item label="December" value="December" />
    //     </Picker> */}
    //     {/* </View> */}
    //     <TextInput
    //       style={styles.inputMonth}
    //       placeholder="Month"
    //       placeholderTextColor="#E4E4E4"
    //       onChangeText={month => setYear(month)}
    //       keyboardType="numeric"
    //     />
    //     <TextInput
    //       style={styles.inputYear}
    //       placeholder="Year"
    //       placeholderTextColor="#E4E4E4"
    //       onChangeText={year => setYear(year)}
    //       keyboardType="numeric"
    //     />
    //   </View>

    //   <View style={styles.inputView2}>
    //     <TextInput
    //       style={styles.inputCVC}
    //       placeholder="CVC"
    //       placeholderTextColor="#E4E4E4"
    //       onChangeText={Month => setMonth(Month)}
    //       keyboardType="numeric"
    //     />
    //     <Text style={styles.cvcText}>
    //       3 or 4 digits usually {'\n'}found near the strip
    //     </Text>
    //   </View>

    //   <View style={styles.AddPayContainer}>
    //     <TouchableOpacity
    //       //onPress={() => navigation.goBack()}
    //       style={styles.signIn}>
    //       <Text style={styles.textSign}>Add Now</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Name on Card</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Name on Card'}
          />
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Card Number</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Card Number'}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Month</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Month'}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Year</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'Year'}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>CVC</Text>
          <TextInput
            style={styles.userDataTextInput}
            placeholder={'CVC'}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.securityText}>
            3 or 4 digits usually found on the signature strip
          </Text>
        </View>
        <View
          style={[
            styles.largeItemContainer,
            {
              alignItems: 'center',
              justifyContent: 'space-evenly',
              height: 40,
            },
          ]}>
          <Switch
            trackColor={{false: '#E89023', true: '#71BF61'}}
            thumbColor="#BBBBBB"
            ios_backgroundColor="#3e3e3e"
            value={isEnabled}
            onValueChange={toggleSwitch}></Switch>
          <Text style={styles.securityText}>SET AS DEFAULT</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    // padding: 25,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputField: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 324,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 10,
    borderRadius: 12,
    // borderWidth: 1,
    // borderColor: '#BBBBBB',
    margin: 15,
    fontFamily: 'VarelaRound-Regular',
  },
  inputField2: {
    width: '40%',
    // borderWidth: 1,
    // borderColor: '#BBBBBB',
    backgroundColor: '#F3F3F3',
    margin: 15,
    fontFamily: 'VarelaRound-Regular',
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 324,
    justifyContent: 'center',
  },
  securityText: {
    justifyContent: 'center',
    // flex: 1,
    flexWrap: 'wrap',
    margin: 10,
    fontFamily: 'VarelaRound-Regular',
    // padding: 0,
    fontSize: 12,
    textAlign: 'center',
  },
  default: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    // margin: 100,
    // backgroundColor: 'black',
  },
  addButton: {
    width: 324,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71BF61',
    marginTop: '10%',
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 18,
  },
  itemText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
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
  itemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '45%',
    height: 85,
    justifyContent: 'space-evenly',
    margin: 10,
    paddingHorizontal: 15,
  },
});
