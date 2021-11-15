import {typeAlias} from '@babel/types';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Dispatch} from 'react';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {GET_USER_BY_ID, CREATE_ACCOUNT} from '../graphql/queries';
import {useQuery} from '@apollo/client';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

export default function App({navigation}: Props) {
  const [email, setEmail] = useState('0');
  const [password, setPassword] = useState('');
  const {error, loading, data} = useQuery(GET_USER_BY_ID, {
    variables: {id: email},
  });
  // const{error,loading,data} = useQuery(CREATE_ACCOUNT,{
  //   variables:{
  //     uname: "test",
  //     pass: "thisprobablyshouldbeahash",
  //     fname: "omar",
  //     lname: "dominguez",
  //     email: "odomardominguezod@gmail.com"
  //   }
  // });
  // const handleLogin = () => {
  //   setLoading(true);
  // };
  // useEffect(() => {
  //   let timer = setTimeout(() => {}, 0);
  //   if (loading) {
  //     timer = setTimeout(() => {
  //       dispatch({type: 'LOGIN', data: {email, password}});
  //       setLoading(false);
  //     }, 1000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [loading]);
  // if(loading) return <Text>Creating Account</Text>
  // if(error) return <Text> ${error.message}</Text>
  // const getUser = (email: string) => String;
  // {
  //   const {error, loading, data} = useQuery(GET_USER_BY_ID, {
  //     variables: {id: email},
  //   });
  //   if (loading) return Alert.alert('Loading');
  //   if (error) return Alert.alert('User not found');
  //   return data;
  // }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/freshpass_logo.png')} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      {/* <View style={styles.button}> */}
      {/* <TouchableOpacity
        style={styles.signIn}
        onPress={() => {}}></TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => {
          if (loading)
            return (
              <View>
                <ActivityIndicator size="large" color="#71BF61" />
              </View>
            );
          if (error)
            // return (
            //   <View>
            //     <Text>User not found.</Text>
            //   </View>
            // );
            return Alert.alert(
              'User not found.',
              "User with that E-Mail was not found. Make sure you are using a valid E-Mail address. Click 'Forgot Password' to reset your password or create an account if you don't have one.",
            );
          navigation.navigate('Home');
        }}
        style={[styles.signIn]}>
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
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('Forgot')}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('Create')}>
        <Text style={styles.create_acc_button}>Create Account</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  imageContainer: {
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    resizeMode: 'contain',
    flex: 1,
  },

  linkContainer: {
    margin: 10,
  },

  inputView: {
    width: 324,
    height: 55,
    marginBottom: 20,

    alignItems: 'center',
    backgroundColor: '#FDF2E6',
    borderRadius: 12,
    justifyContent: 'center',
  },

  TextInput: {
    fontFamily: 'VarelaRound-Regular',
    width: 300,
    flex: 1,
    textAlign: 'center',
  },

  forgot_button: {
    fontFamily: 'VarelaRound-Regular',
  },
  create_acc_button: {
    fontFamily: 'VarelaRound-Regular',
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
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#71BF61',
    backgroundColor: '#71BF61',
    borderWidth: 1,
    marginTop: 110,
    // left: 1,
  },

  button: {
    alignItems: 'center',
    marginTop: 50,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'VarelaRound-Regular',
  },

  // /* Rectangle 2 */
  username_container: {
    position: 'absolute',
    width: 327,
    height: 66,
    left: 24,
    top: 226,

    backgroundColor: '#E89023',
    borderRadius: 12,
  },

  // /* Username */
  // username_default:{

  // position: "absolute",
  // // width: 56,
  // // height: 14,
  // // left: 48,
  // // top: 238,

  // fontFamily: "VarelaRound-Regular",
  // // fontStyle: "normal",
  // // fontWeight: "normal",
  // fontSize: 16,
  // lineHeight: 14,
  // letterSpacing: -0.3,

  // color: "#E89023",
  // }

  // /* Name */
  // username_default:{
  //   position: "absolute",
  //   width: "71px",
  //   height: "19px",
  //   left: "48px",
  //   top: "258px",

  //   font-family: "Varela Round",
  //   font-style: "normal",
  //   font-weight: "normal",
  //   font-size: "16px",
  //   line-height: "19px",
  //   letter-spacing: "-0.3px",

  //   color: #424347
  // }
});
