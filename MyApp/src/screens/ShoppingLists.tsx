import React, {useEffect, useState} from 'react';
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
  FlatList,
  ListRenderItem 
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ShoppingListComponent from '../components/ShoppingListComponent';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
import {GET_SHOPPING_LISTS_BY_USER_ID, GET_SHOPPING_LIST_CART_BY_ID} from '../graphql/queries';
import { CREATE_SHOPPING_LIST } from '../graphql/mutations';
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
  const { error,loading, data} = useQuery(GET_SHOPPING_LISTS_BY_USER_ID, {
    variables: {id: user.id},
  });
  const [getLists,getListsResult] = useLazyQuery(GET_SHOPPING_LIST_CART_BY_ID,{
    variables: {id: user.id},
  });
  // getLists({ variables: {id: user.id} })    
  // console.log(getListsResult.data.getShoppingListCartByID)
  const [mutateFunction, createShoppingResult] = useMutation(CREATE_SHOPPING_LIST, {
    onError: err => {
      console.log(err);
    },
  });
  
  const [addItemState,setaddItemState] = useState(false);
  useEffect(() =>{
    getLists({ variables: {id: user.id} })
  },[data]);
  
  useEffect(() => {
    try {
      mutateFunction({
        variables: {
          account_id: user.id,
        },
      });
    } catch {}
    while (createShoppingResult.loading) { }
    if (createShoppingResult.error) {
      console.log(createShoppingResult.error);
    }
  }, [addItemState]);



  if (loading) {
    return <Text>WAITING FOR DATA</Text>;
  }
  if (error) {
    return <Text> {error.message} </Text>;
  }
  
  const renderItem = (data :any) => (
    <ShoppingListComponent
    navigation = {navigation}
    props={data}
    />
  );



  return (
    <View style={styles.screen}>
      <View style={styles.sectionContainer}>
        <SearchBar
          placeholder="Search"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(data.getShoppingListsByUserId)}></SearchBar>
        <TouchableOpacity style={styles.addContainer} onPress={() => setaddItemState(true)}>
          <Image
            style={styles.addIcon}
            resizeMode="contain"
            source={require('../assets/add_icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={data.getShoppingListsByUserId}
        renderItem={renderItem}
      >
      </FlatList>
      {/* <ScrollView>
        if(data != null){

        }
        <ShoppingList
          name={
            data.getShoppingListsByUserId[0].shopping_list_id
          }></ShoppingList>
      </ScrollView> */}
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
