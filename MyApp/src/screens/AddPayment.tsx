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
    Image
} from 'react-native';
import React, { useState } from "react";

export default function AddPayment() {
    const [email, setEmail] = useState("");
    const [cardNumber, setCard] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [name, setName] = useState("");


    const [password, setPassword] = useState("");
   
    return (
        <View style={styles.container}> 
            <View style={styles.inputView}>
            <View>
            <TextInput
                style={styles.inputName}
                placeholder="Name on Card"
                placeholderTextColor="#003f5c"
                onChangeText={(name) => setName(name)}
            />
            </View>

            <View>
            <TextInput
                style={styles.inputCard}
                placeholder="Card Number"
                placeholderTextColor="#003f5c"
                onChangeText={(carnumber) => setEmail(carnumber)}
            />
            </View>

            </View>
    
            <View style={styles.inputView2}>
                <TextInput
                    style={styles.inputMonth}
                    placeholder="Month"
                    placeholderTextColor="#003f5c"
                    onChangeText={(Month) => setMonth(Month)}
                />

                    <TextInput
                    style={styles.inputYear}
                    placeholder="Year"
                    placeholderTextColor="#003f5c"
                    onChangeText={(year) => setYear(year)}
                />
            </View>

            <View style={styles.inputView2}>
            <TextInput
                style={styles.inputCVC}
                placeholder="CVC"
                placeholderTextColor="#003f5c"
                onChangeText={(Month) => setMonth(Month)}
            />
                <Text>
                    3 or 4 digits usually found near the st
                </Text>
            </View>

            <View style={styles.AddPayContainer}>
                <TouchableOpacity
                    //onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                    borderColor: '#71BF61',
                    backgroundColor: '#71BF61',
                    borderWidth: 1,
                    marginTop: 225}]}>
                    <Text style={[styles.textSign, {
                        color: '#FFFFFF'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
      </View>
    )
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

    AddPayContainer:{
        flex:3
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

    signIn: {
        width: 324,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        left: 1
    },

    button: {
        alignItems: 'center',
        marginTop: 50
    },
  
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'VarelaRound-regular'
    },
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
        width: "80%",
        marginBottom: 10,
        marginStart:10,
        marginEnd:10,

        alignItems: "center",
        backgroundColor: "#FDF2E6",
        borderRadius:12,
        justifyContent: 'space-around'

    },

    inputView2: {
        width: "80%",
        marginBottom: 10,
        marginStart:10,
        marginEnd:10,
        paddingEnd:10,
        paddingBottom:20,
        paddingLeft:10,
        padding:20,
        flexDirection:"row",
        backgroundColor: "#FDF2E6",
        borderRadius:12,
        justifyContent: 'space-around'
    },
    inputName:{
        marginBottom: 10,
        marginStart:10,
        marginEnd:10,  
        padding:10,
        alignItems: "center",
        backgroundColor: "#FDF2E6",
        borderRadius:12,
    },
    inputCard:{
        marginBottom: 10,
        marginStart:10,
        marginEnd:10,  
        padding:10,
        alignItems: "center",
        backgroundColor: "#FDF2E6",
        borderRadius:12,
    },
    inputYear:{

        flex:1,
        alignItems: "center",
        backgroundColor: "#FDF2E6",
        borderRadius:12,
        width:10,

    },
    inputMonth:{

        flex:1,
        width:5,
        alignItems: "center",
        backgroundColor: "#FDF2E6",
        borderRadius:12,
    },

    inputCVC:{
        marginBottom: 10,
        marginStart:10,
        marginEnd:10,  
        
        alignItems: "center",
        backgroundColor: "#FDF2E6",
        borderRadius:12,
    },
    TextInput: {
        flex: 1,
        padding: 5,
        fontFamily:'VarelaRound-regular'
    },  
});