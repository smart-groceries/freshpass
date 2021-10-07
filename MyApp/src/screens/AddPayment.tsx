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
} from 'react-native';
import React, {useState} from 'react';

export default function AddPayment() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.container_}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputName}
            placeholder="Name on Card"
            placeholderTextColor="#E4E4E4"
            onChangeText={name => setName(name)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputCard}
            placeholder="Card Number"
            placeholderTextColor="#E4E4E4"
            onChangeText={carnumber => setEmail(carnumber)}
          />
        </View>
      </View>

      <View style={styles.inputView2}>
        <TextInput
          style={styles.inputMonth}
          placeholder="Month"
          placeholderTextColor="#E4E4E4"
          onChangeText={Month => setMonth(Month)}
        />

        <TextInput
          style={styles.inputYear}
          placeholder="Year"
          placeholderTextColor="#E4E4E4"
          onChangeText={year => setYear(year)}
        />
      </View>

      <View style={styles.inputView2}>
        <TextInput
          style={styles.inputCVC}
          placeholder="CVC"
          placeholderTextColor="#E4E4E4"
          onChangeText={Month => setMonth(Month)}
        />
        <Text style={styles.cvcText}>
          3 or 4 digits usually {'\n'}found near the strip
        </Text>
      </View>

      <View style={styles.AddPayContainer}>
        <TouchableOpacity
          //onPress={() => navigation.goBack()}
          style={styles.signIn}>
          <Text style={styles.textSign}>Add Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  create_acc_button: {
    height: 30,
    marginBottom: 30,
  },

  AddPayContainer: {
    flex: 1,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#32a838',
  },

  signIn: {
    width: 324,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    left: 1,
    backgroundColor: '#E89023',
    opacity: 0.5,
    marginTop: 225,
  },

  button: {
    alignItems: 'center',
    marginTop: 50,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-regular',
    // opacity:100,
    color: '#E89023',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  container_: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,
    alignItems: 'center',
  },
  inputView: {
    width: '80%',
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,

    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-around',
  },

  inputView2: {
    width: '80%',
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,
    paddingEnd: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 2,
    justifyContent: 'space-around',
  },
  inputName: {
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRightColor: 'red',
    borderRadius: 2,
    borderColor: '#E4E4E4',
    borderWidth: 1,
  },
  inputCard: {
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 2,
    borderColor: '#E4E4E4',
    borderWidth: 1,
  },
  inputYear: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    width: 10,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  inputMonth: {
    justifyContent: 'space-between',
    flex: 1,
    width: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    borderColor: '#E4E4E4',
    borderWidth: 1,
  },

  inputCVC: {
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,
    width: '40%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    borderColor: '#E4E4E4',
    borderWidth: 1,
  },
  TextInput: {
    width: '30%',
    alignContent: 'center',
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,

    padding: 5,
    fontFamily: 'VarelaRound-regular',
  },
  cvcText: {
    color: '#E4E4E4',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
