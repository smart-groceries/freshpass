'use strict';
 
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
 
export default class QRGenerator extends Component {
  state = {
    text: 'Manually Enter Order Number',
  };
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        {/* <QRCode
      value={this.state.text}
    /> */}
        <QRCode
          value={this.state.text.length > 0 ? this.state.text : "app"}
          size={200}
          color='#000000'
          />
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});

