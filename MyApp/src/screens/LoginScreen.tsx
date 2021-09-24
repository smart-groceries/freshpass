import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>


      <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
    
          <TouchableOpacity>
            <Text style={styles.create_acc_button}>Create New Account?</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtn}>LOGIN</Text>
        </TouchableOpacity>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {

    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
    backgroundColor: "#FDF2E6",
    borderRadius:12,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontFamily:'VarelaRound-regular'
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  create_acc_button: {
    
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#32a838",
  },





// /* Rectangle 2 */
username_container:{
position: "absolute",
width: 327,
height: 66,
left: 24,
top: 226,

backgroundColor: "#E89023",
borderRadius:12,
}


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