import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { renderToStringWithData } from '@apollo/client/react/ssr';

export default function StoreLocator() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: 33.7838,
        longitude: -118.1141,
        latitudeDelta: 0.015,
        longitudeDelta: 0.04,
      }} >

        <Marker coordinate = {{latitude: 33.76151900699398,
        longitude: -118.11636383180144}}
        image={require('./../assets/store_icon.png')}
        >
          <Callout>
            <Text style ={styles.storename}>6290 Pacific Coast Hwy</Text>
          </Callout>
        </Marker>
        <Marker coordinate = {{latitude: 33.79385160286719,
        longitude: -118.14131296720306}}
        image={require('./../assets/store_icon.png')}
        >
          <Callout>
            <Text style ={styles.storename}>1930 N. Lakewood Blvd</Text>
          </Callout>
        </Marker>

      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 700
  },
  storename: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});