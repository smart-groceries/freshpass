import RNBounceable from '@freakycoder/react-native-bounceable';
import * as React from 'react';

import {
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  ImageComponent,
  AppRegistry,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';



export interface ShoppingListProps {
    onPress?: () => void;
    ListNumber?: Number;
  }
  
export default class ShoppingList extends React.Component<ShoppingListProps>{
    renderShoppingComponent = () => {
        const {
            onPress,
            ListNumber,
        } = this.props;

        return (
            <View style = {[styles.List,{flexDirection:"row"}]}>
                <View style = {[styles.listInfoContainer,{flexDirection:"column"}]}>
                    <Text style = {styles.ListNameText}>List Name {this.props.ListNumber}</Text>
                    <Text style = {styles.ItemsSavedText}>{this.props.ListNumber}200 Items Saved</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text>View List</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    };

    
    render() {
        return (
            this.renderShoppingComponent()
        );
      }
}


interface Style {
    storeContainer: ViewStyle;
    storeIconImageStyle: ImageStyle;
}

const _container = (): ViewStyle => ({
    height: 168,
    width: '45%',
    //   borderRadius: 7,
    //margin: 9,
    backgroundColor: '#F3F3F3',
    margin: 5,
  });

const styles = StyleSheet.create({
    List:{
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 20,
        backgroundColor:"#FFFFFF",
        borderBottomColor:"#000000",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    button: {
      alignItems: "baseline",
      backgroundColor: "#DDDDDD",
      padding: 7,
      borderRadius: 20,
      paddingEnd: 40,
      paddingStart: 40
    },
    listInfoContainer: {
        flex: 1,
        alignContent: "flex-start",
        fontFamily: 'VarelaRound-Regular',

    },
    ListNameText:{
        flex:1,
        fontSize:16,
        paddingLeft:15,
        color:"black",
        
        fontFamily: 'VarelaRound-Regular',

    },
    ItemsSavedText:{
        flex:1,
        paddingLeft:20,
        fontFamily: 'VarelaRound-Regular',
        color:"grey"
    }
  });