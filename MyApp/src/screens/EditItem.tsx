import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";


export default function EditItem(){

    return(
        <View>
            <Image
            source={require('./../assets/store_icon.png')}/>
            
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
            activeOpacity={0.1}
            underlayColor="#DDDDDD"
            // onPress = {onPress}>
            >
                <Text style={styles.SaveText}>Save</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput:{
        borderRadius:4,
        borderColor:'grey',
        borderWidth:1,
        color:'black'
    },
    IDText:{
        borderRadius:4,
        borderColor:'grey',
        borderWidth:1,
        color:'black',
        backgroundColor:'grey'
    },
    SaveButton:{
        borderRadius:50,
        backgroundColor:'orange',
    },
    SaveText:{

    }
})