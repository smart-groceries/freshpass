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
    ViewStyle
} from 'react-native';
import ShoppingList from '../components/ShoppingList';

export interface Shopping {
    style?: ViewStyle | Array<ViewStyle> | undefined;
  }

export default class ShoppingLists extends React.Component<Shopping>{
    render = () =>{
        const {style} = this.props;
        return(
            <ScrollView>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>
                <ShoppingList></ShoppingList>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    text: {
      fontFamily: 'VarelaRound-Regular',
      fontSize: 40,
      color: '#424347',
      lineHeight: 48,
      letterSpacing: -1,
      left: '6.4%',
      top: '20%',
    },
    sectionContainer: {
      marginTop: '5%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      //alignItems: 'flex-start',
    },
  });
  