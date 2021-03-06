import {
  View,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {RootStackParamList} from '../navigation/RootStackParamList';

export interface ShoppingListProps {
  onPress?: () => void;
  ListNumber?: Number;
}

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Lists'>;
  props:any;
}

const ShoppingListComponent = ({navigation,props}:Props) => {
  const [ListNumber, setListNumber] = useState(0);
  const [ListName, setListName] = useState('List');
  const onPress = (name: string) => {
    setListName(name);
  };
  const[shoppingListID] = useState(props.item.shopping_list_id)  
  return (
    <View style={[styles.List, {flexDirection: 'row'}]}>
      <View style={[styles.listInfoContainer, {flexDirection: 'column'}]}>
        <Text style={styles.ListNameText}> List {props.item.shopping_list_id}</Text>  
        <Text style={styles.ItemsSavedText}>{props.item.items.length} Items Saved</Text>
      </View>
      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('ShoppingListView',props.item.shopping_list_id)}
        style={styles.button}>
          <Text>View List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  List: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'baseline',
    backgroundColor: '#DDDDDD',
    padding: 7,
    borderRadius: 20,
    paddingEnd: 40,
    paddingStart: 40,
  },
  listInfoContainer: {
    flex: 1,
    alignContent: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
  },
  ListNameText: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 15,
    color: 'black',

    fontFamily: 'VarelaRound-Regular',
  },
  ItemsSavedText: {
    flex: 1,
    paddingLeft: 20,
    fontFamily: 'VarelaRound-Regular',
    color: 'grey',
  },
});

export default ShoppingListComponent;
