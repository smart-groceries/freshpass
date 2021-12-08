import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { GoogleVisionBarcodesDetectedEvent, RNCamera } from 'react-native-camera';

export default class BarcodeScanner extends Component {
  camera: RNCamera | null | undefined;
  constructor(props: any) {
  super(props);
  }
  onBarCodeRead(scanResult: { type: any; data: any; }) {
    console.warn(scanResult.type);
    console.warn(scanResult.data);
  }
render() {
  return (
    <RNCamera
      ref={ref => {
        this.camera = ref;
      }}
      onBarCodeRead={this.onBarCodeRead.bind(this)}
      captureAudio={false}
      style={{flex: 1}}
      type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
       /> 
    );
  }}