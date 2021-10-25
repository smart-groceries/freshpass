import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";


export default function EditItem(){

    return(
        <View>
            <Image
            style = {styles.image}
            source={require('./../assets/macncheese.png')}/>
            
            <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#003f5c"/>
        
            <TextInput
            style={styles.TextInput}
            placeholder="Brand"
            placeholderTextColor="#003f5c"/>
            
            <TextInput
            style={styles.TextInput}
            placeholder="Price"
            placeholderTextColor="#003f5c"/>
            
            <TextInput
            style={styles.TextInput}
            placeholder="Quantity"
            placeholderTextColor="#003f5c"/>
            
            <TextInput
            style={styles.IDText}
            placeholder="ID"
            placeholderTextColor="#003f5c"/>

            <TouchableHighlight 
            style={styles.SaveButton}
            >
                <Text style={styles.SaveText}>Save</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        alignSelf:'center'
    },

    TextInput:{
        width:"90%",
        left:20,
        marginTop:20,
        borderRadius:4,
        borderColor:'black',
        borderWidth:1,
        color:'black',
        alignContent:"center",
        alignItems:"center"
    },
    IDText:{
        width:"90%",
        left:20,
        marginTop:20,
        borderRadius:4,
        borderColor:'black',
        borderWidth:1,

        color:'black',
        backgroundColor:'grey'
    },
    SaveButton:{
        borderRadius:50,
        backgroundColor:'orange',
        width:"90%",
        left:20,
        marginTop:20,
        borderColor:'black',
        borderWidth:1,
        padding: 10
    },
    SaveText:{
        textAlign:'center',
    }
})