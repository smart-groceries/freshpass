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
    Alert
} from 'react-native';
import FilterIcon from '../components/Filter';
import SearchBar from '../components/SearchBar';
import GroceryItem from '../components/GroceryItem';

export interface CartProp {
    style?: ViewStyle | Array<ViewStyle> | undefined;
  }

export default class CartView extends React.Component<CartProp>{
    render = () =>{
        const {style} = this.props;
        return(
        <View>
            <View style = {styles.sectionContainer}>
                <SearchBar
                    placeholder="Search"
                    onPress={() => Alert.alert('onPress')}
                    onChangeText={text => console.log(text)}>  
                </SearchBar>
                <FilterIcon></FilterIcon>
            </View>
            <ScrollView contentContainerStyle={styles._container}>
                <GroceryItem></GroceryItem>
                <GroceryItem></GroceryItem>
                <GroceryItem></GroceryItem>
                <GroceryItem></GroceryItem>
                <GroceryItem></GroceryItem>
            </ScrollView>
        </View>
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
      flexDirection: 'row',
      backgroundColor: "#FFFFFF"
      //alignItems: 'flex-start',
    },
    _container:{
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
      },
  });
  