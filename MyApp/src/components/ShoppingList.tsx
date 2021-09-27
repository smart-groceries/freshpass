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
                    <Text>List Name {this.props.ListNumber}</Text>
                    <Text>{this.props.ListNumber}200 Items Saved</Text>
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
        borderBottomColor:"#DDDDDD",
        borderBottomWidth: StyleSheet.hairlineWidth

    },
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 7,
      borderRadius: 20,
      paddingEnd: 40,
      paddingStart: 40
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    listInfoContainer: {
        flex: 1,
        alignContent: "flex-start"
    }
  });