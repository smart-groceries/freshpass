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
import {RouteProp} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GET_SHOPPINGLISTS_BY_USER_ID} from '../graphql/queries';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Lists'>;
  route: RouteProp<RootStackParamList, 'Lists'>;
};

const ShoppingLists = ({route, navigation}: Props) => {
  const [user, setUser] = useState({
    email: route.params.user.email,
    fname: route.params.user.fname,
    lname: route.params.user.lname,
    id: route.params.user.id,
  });
  const {error, loading, data} = useQuery(GET_SHOPPINGLISTS_BY_USER_ID, {
    variables: {id: user.id},
  });

  return (
    <View style={styles.screen}>
      <View style={styles.sectionContainer}>
        <SearchBar
          placeholder="Search"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}></SearchBar>
        <TouchableOpacity style={styles.addContainer} onPress={() => {}}>
          <Image
            style={styles.addIcon}
            resizeMode="contain"
            source={require('../assets/add_icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView></ScrollView>
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
    // marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#BBBBBB',
    //alignItems: 'flex-start',
  },
});

export default ShoppingLists;
