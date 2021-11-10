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
  ScrollViewBase,
  ViewStyle,
  Alert,
  ImageComponent,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export default function AddPayment() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [selectedMonth, setSelectedMonth] = useState();
  const [password, setPassword] = useState('');

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

    <View style={styles.mainContainer}>
      <TextInput
        style={styles.inputField}
        placeholder={'Name on Card'}></TextInput>
      <TextInput
        style={styles.inputField}
        placeholder={'Card Number'}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  inputField: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 324,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    margin: 15,
    fontFamily: 'VarelaRound-Regular',
  },
  placeHolder: {},
  pickerContainer: {
    borderWidth: 1,
    width: '40%',
  },
});
