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





const EditAccountInfoScreen = () => {

    const [data, setData] = React.useState({
        email: 'hello1',
        username: 'hello2',
        name: 'hello3',
        password: 'hello4',
        stateHasBeenChanged: false
    });

    const changedEmail = (val:any) => {
            setData({
                ...data,
                email: val,
                stateHasBeenChanged: true
            });
    }

    const changedUsername = (val:any) => {
        setData({
            ...data,
            username: val,
            stateHasBeenChanged: true
        });
    }

    const changedName = (val:any) => {
        setData({
            ...data,
            name: val,
            stateHasBeenChanged: true
        });
    }

    const saveState = () => {
        setData({
            ...data,
            stateHasBeenChanged: false
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
              <ScrollView>
              <Text style={[styles.text_header,{marginTop: 60}]}>Account Info</Text>
              <Text style={[styles.text_footer,{marginTop: 50}, {marginLeft: 17}]}>Email</Text>
              <View style={[styles.action, {marginTop: 14}]}>
              <TextInput
                      placeholder= 'Email'
                      placeholderTextColor='#C8C8C8'
                      defaultValue={data.email}
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => changedEmail(val)}
                  />
              </View>

              <Text style={[styles.text_footer,{marginTop: 50}, {marginLeft: 17}]}>Username</Text>
              <View style={[styles.action, {marginTop: 14}]}>
              <TextInput
                      placeholder= 'Username'
                      placeholderTextColor='#C8C8C8'
                      defaultValue={data.username}
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => changedUsername(val)}
                  />
              </View>

              <Text style={[styles.text_footer,{marginTop: 50}, {marginLeft: 17}]}>Name</Text>
              <View style={[styles.action, {marginTop: 14}]}>
              <TextInput
                      placeholder= 'Name'
                      placeholderTextColor='#C8C8C8'
                      defaultValue={data.name}
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => changedName(val)}
                  />
              </View>

              <Text style={[styles.text_footer,{marginTop: 50}, {marginLeft: 17}]}>Password</Text>
              <View style={[styles.action, {marginTop: 14}]}>
                <View style={styles.textInput}>
                    <Text style={[{color:'#C8C8C8'}, 
                                {fontSize:20},
                                {justifyContent: 'center'},  
                                {flexDirection: 'row'},
                                {marginTop:16}
                                ]}>*************</Text>
                </View>
              </View>
            
              <View style={styles.forgotPasswordButton}>
              <TouchableOpacity>
                    <Text style={styles.forgotPasswordButtonText}>To reset your password, please click here</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.button}>
                  {/* <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Sign Up</Text>
                  </LinearGradient> */}
  
                  <TouchableOpacity
                      onPress={() => saveState()}
                      style={styles.save}
                  >
                      <Text style={styles.textSaveButton}>Save</Text>
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
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'VarelaRound-regular'
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
    forgotPasswordButton: {
        marginTop: 40,
        left: 34
    },
    forgotPasswordButtonText: {
        color: '#B3B3B3'
    }
  });



export default EditAccountInfoScreen;