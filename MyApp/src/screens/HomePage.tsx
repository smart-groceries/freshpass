import {tSImportEqualsDeclaration} from '@babel/types';
import * as React from 'react';

import {View, Text, StyleSheet, Image, Alert, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import Store from '../components/Store';

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
        <NavBar />
      </View>
    );
  };
}

const _container = (): ViewStyle => ({
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignContent: 'center',
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
    paddingHorizontal: 24,
  },
});
