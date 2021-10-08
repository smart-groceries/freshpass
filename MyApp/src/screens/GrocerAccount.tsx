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





const GrocerAccountScreen = () => {

    const [data, setData] = React.useState({
        email: 'contact@vons.com',
        name: 'Vons - Ximeno and Atherton',
        balance: '1,598.26'
    });

    return (
        <View style={styles.container}>
            <Text style={[styles.text_header,{marginTop: 65}]}>Store Settings</Text>
              <View style={[styles.userInfo,{marginTop: 28}]}>
              <Image
                    source={require('../assets/vons-logo-small.png')}
                    style={[{borderRadius: 20}]} 
                />
                  <View style={{flexDirection: 'column'}}>
                    <Text style={[styles.userInfoText,{fontSize: 20}]}>{data.name}</Text>
                    <Text style={[styles.userInfoText,{fontSize: 14}]}>{data.email}</Text>
                  </View>
              </View>


              <View style={[styles.accountEditOption,{marginTop: 48}, {left:17}]}>
                  <View style={[{flexDirection: 'column'},{borderColor: '#999999'}]}>
                    <Text style={[styles.userInfoText,{fontSize: 20}]}>Balance</Text>
                  </View>
                  <Text style={[styles.accountBalance, {left: 150}]}> ${data.balance}</Text>
            </View>


            <TouchableOpacity>
            <View style={[styles.accountEditOption,{marginTop: 32}, {left: 30}]}>
                  <View style={[{flexDirection: 'column'},{borderColor: '#999999'}]}>
                    <Text style={[styles.userInfoText,{fontSize: 15}]}>Payout Settings</Text>
                    <Text style={[styles.userInfoText,{color: '#999999'},{fontSize: 11}, {marginTop: 2}]}>See currently saved bank accounts</Text>
                  </View>
                <Image
                    source={require('../assets/chevron_pointing_right.png')}
                    style={{left: 137}}
                />
            </View>
            </TouchableOpacity>


            <TouchableOpacity>
            <View style={[styles.accountEditOption,{marginTop: 28}, {left: 30}]}>
            
                  <View style={[{flexDirection: 'column'},{borderColor: '#999999'}]}>
                    <Text style={[styles.userInfoText,{fontSize: 15}]}>Store Information</Text>
                    <Text style={[styles.userInfoText,{color: '#999999'},{fontSize: 11}, {marginTop: 2}]}>Edit Store Name, Email, and Password</Text>
                  </View>
                <Image
                    source={require('../assets/chevron_pointing_right.png')}
                    style={{left: 120}}
                />
            </View>
            </TouchableOpacity>
              
              <View style={[styles.logOutButton, {marginTop: 350}]}>
              <TouchableOpacity>
                        <Text style={styles.logOutButtonText}>Logout</Text>
              </TouchableOpacity>
              </View>
          
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
    },
    accountEditOption: {
        left: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    accountBalance: {
        fontSize: 22,
        fontFamily: 'VarelaRound-regular',
        color: '#71BF61'
    }
  });



export default GrocerAccountScreen;