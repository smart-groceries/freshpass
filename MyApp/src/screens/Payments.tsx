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
    ScrollViewBase,
    ViewStyle,
    Alert,
    ImageComponent,
    Image
} from 'react-native';


export interface Payment {
    style?: ViewStyle | Array<ViewStyle> | undefined;
  }

export default class Payments extends React.Component<Payment>{
    render = () =>{
        return(
            <View>
                <Text style={styles.NoPaymentText}>No Payment Info Found</Text>
                <Text style={styles.NoPaymentSubtext}>You can add and edit payments during checkout????</Text>
                <View style={styles.PaymentMethodContainer}>
                    <Image
                    style={styles.searchIconImageStyle}
                    source={require('./../components/assets/store_icon.png')}/>
                    <Text style ={styles.AddPaymentText}>Add Payment Method</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({


    NoPaymentText: {
        "width": 325,
        "left":25,
        "fontFamily": "varelaround-regular",
        "fontSize": 20,
        "display": "flex",
        "alignItems": "center",
        "textAlign":"center",
        "color": "#151522"
    },
    NoPaymentSubtext: {
        "left": 25,
        "right": 25,
        "fontFamily": "varelaround-regular",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 13,
        "textAlign": "center",
        "color": "#999999"
    },
    PaymentMethodContainer: {
        "position": "absolute",
        "width": 325,
        "height": 150,
        "left": 25,
        "top": 400,
        "backgroundColor": "#FFFFFF",
        "borderTopLeftRadius": 5,
        "borderTopRightRadius": 5,
        "borderBottomRightRadius": 5,
        "borderBottomLeftRadius": 5,
        borderColor: "orange",
        borderWidth:1,
        shadowColor:"#999999",
        shadowOpacity:5,
        shadowOffset:{width:20,height:20},
        shadowRadius:50
    },
    AddPaymentText: {
        top:"70%",
        left:"20%",
        "position": "absolute",
        "fontFamily": "varelaround-regular",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 20,
        "lineHeight": 25,
        textAlign:"center",
        "color": "#F2994A"
    },
    searchIconImageStyle: {
        "position": "relative",
        "width": 70,
        "height": 70,
        "left": 120,
        "top": 25
    },
});