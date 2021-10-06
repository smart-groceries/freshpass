import {tSImportEqualsDeclaration} from '@babel/types';
import * as React from 'react';

import {View, Text, StyleSheet, Image, Alert, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';
import Store from '../components/Store';
import FilterIcon from '../components/Filter';

export interface HomePageProps {
  style?: ViewStyle | Array<ViewStyle> | undefined;
}

export default class HomePage extends React.Component<HomePageProps> {
  render = () => {
    const {style} = this.props;
    return (
      <View style={styles.screen}>
        <View style={styles.sectionContainer}>
          <SearchBar
            placeholder="Search"
            onPress={() => Alert.alert('onPress')}
            onChangeText={text => console.log(text)}></SearchBar>
          <FilterIcon></FilterIcon>
        </View>
        <ScrollView contentContainerStyle={[_container(), style]}>
          <Store></Store>
          <Store></Store>
          <Store></Store>
          <Store></Store>
          <Store></Store>
          <Store></Store>
          <Store></Store>
        </ScrollView>
      </View>
    );
  };
}

const _container = (): ViewStyle => ({
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'space-evenly',
  marginTop: 5,
  marginRight: 10,
  marginLeft: 10,
});

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
  _container: {
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
