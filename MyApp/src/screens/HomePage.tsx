import {tSImportEqualsDeclaration} from '@babel/types';
import * as React from 'react';

import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';

const HomePageScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.sectionContainer}>
        <SearchBar
          placeholder="Search"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}></SearchBar>
      </View>
      <ScrollView>
        {/* <Text>
          Stores will go Here testsadfasdfsdfasfsdafdafasdfasdfasdfasfasdfasd
        </Text> */}
      </ScrollView>
      <NavBar />
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
    marginTop: '5%',
    paddingHorizontal: 24,
  },
});

export default HomePageScreen;
