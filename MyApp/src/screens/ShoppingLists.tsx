import React, {useState} from 'react';
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
  Image,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ShoppingList from '../components/ShoppingList';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Lists'>;
};

const ShoppingLists = () => {
  const [lists, setLists] = useState<number[]>([]);
  const [listCount, setListCount] = useState(0);
  // let lists = [1, 2, 3, 4];
  // let buttonLists = lists.map(info => <ShoppingList key={info} />);
  const addList = () => {
    setListCount(listCount + 1);
    setLists(lists => [...lists, listCount]);
    // buttonLists = lists.map(info => <ShoppingList key={info} />);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.sectionContainer}>
        <SearchBar
          placeholder="Search"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}></SearchBar>
        <TouchableOpacity style={styles.addContainer} onPress={addList}>
          <Image
            style={styles.addIcon}
            resizeMode="contain"
            source={require('../assets/add_icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {lists.map(info => (
          <ShoppingList key={info} />
        ))}
      </ScrollView>
    </View>
  );
};

// const _container = (): ViewStyle => ({
//   alignItems: 'flex-start',
//   flexDirection: 'column',
//   alignContent: 'center',
//   marginTop: 5,
//   marginHorizontal: 10,
// });

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  addContainer: {
    height: 43,
    width: 43,
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    width: 18,
    height: 18,
    alignSelf: 'center',
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
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
  },
});

export default ShoppingLists;
