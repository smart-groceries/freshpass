import React from 'react';
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
} from 'react-native';
import FilterIcon from '../components/Filter';
import SearchBar from '../components/SearchBar';
import ShoppingList from '../components/ShoppingList';

const ShoppingLists = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.sectionContainer}>
        <SearchBar
          placeholder="Search"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}></SearchBar>
        <FilterIcon></FilterIcon>
      </View>
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
    </View>
  );
};

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
    marginTop: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
  },
});

export default ShoppingLists;
