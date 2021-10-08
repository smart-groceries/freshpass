import { tsNamedTupleMember } from '@babel/types';
import React from 'react'
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
    Image
} from 'react-native';





const AccountScreen = () => {

    const [data, setData] = React.useState({
        email: 'johndoe@gmail.com',
        name: 'John Doe',
    });

    return (
        <View style={styles.container}>
            <Text style={[styles.text_header,{marginTop: 65}]}>Account Settings</Text>
              <View style={[styles.userInfo,{marginTop: 28}]}>
              <Image
                    source={require('../assets/profile_photo.png')}
                    style={[{borderRadius: 20}]} 
                />
                  <View style={{flexDirection: 'column'}}>
                    <Text style={[styles.userInfoText,{fontSize: 20}]}>{data.name}</Text>
                    <Text style={[styles.userInfoText,{fontSize: 14}]}>{data.email}</Text>
                  </View>
              </View>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
              <ScrollView>
            
              <View style={styles.logOutButton}>
              <TouchableOpacity>
                    <Text style={styles.logOutButtonText}>Logout</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
          
        </View>
      );
  };
  


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFFFFF'
    },
    text_header: {
        color: '#424347',
        fontWeight: 'bold',
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        fontFamily: 'VarelaRound-regular',
        left: 20
    },
    text_footer: {
        color: '#424347',
        fontSize: 16,
        fontFamily: 'VarelaRound-regular',
        left: 24
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        paddingBottom: 5
        
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        height: 50,
        backgroundColor: '#F5F5F5',
        fontFamily: 'VarelaRound-regular',
        borderRadius: 5,
        position: 'absolute',
        width: 324,
        left: 34,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    greyedOutSave: {
        width: 324,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#F8F8F8',
        backgroundColor: '#F8F8F8',
        borderWidth: 1,
        marginTop: 175,
        left: 1       
    },
    save: {
        width: 324,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#71BF61',
        backgroundColor: '#71BF61',
        borderWidth: 1,
        marginTop: 175,
        left: 1
    },
    textSaveButton: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'VarelaRound-regular',
        color: '#FFFFFF'
    },
    greyedOutTextSaveButton: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'VarelaRound-regular',
        color: '#DCDCDC'
    },
    logOutButton: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logOutButtonText: {
        color: '#424347',
        fontFamily: 'VarelaRound-regular',
        fontSize: 20,

    },
    userInfo: {
        left: 24,
        flexDirection: 'row',

    },
    userInfoText: {
        color: '#424347',
        fontFamily: 'VarelaRound-regular',
        left: 16
    }
  });



export default AccountScreen;