import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { renderToStringWithData } from '@apollo/client/react/ssr';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function StoreLocator() {
  const [ region, setRegion ] = React.useState({
    latitude: 33.7838,
    longitude: -118.1141,
    latitudeDelta: 0.015,
    longitudeDelta: 0.04
  })
  const currentLocation = {
    description: 'Current Location',
    geometry: { location: { lat:   33.785056718140424, lng: -118.11488944704615 } },
  };
  const myStore = {
    description: 'My Store',
    geometry: { location: { lat:   33.7635316460389, lng: -118.1158628065532 } },
  };
  

  const GOOGLE_PLACES_API_KEY = 'AIzaSyC_eCHatI834lJ-pvFs9qxjSS-Bu-iFVQE';
  
  return (
    <View style={styles.container}>
     <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails = {true}
        GooglePlacesDetailsQuery={{
          rankby: "distance"
        }}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en', // language of the results
          // components: "country: us",
          // types: "supermarket",
          //radius: 30000,
          location: `${region.latitude}, ${region.longitude}`

        }}
        onPress={(data, details = null) => {
          console.log(data, details)
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.04
          })
        }}
        predefinedPlaces={[currentLocation, myStore]}

        onFail={(error) => console.error(error)}
        styles = {{
          container: {flex: 0, position: "absolute", width: "100%", zIndex: 1},
          listView: { backgroundColor: "white"}
        }}
      />
      <MapView style={styles.map}
      initialRegion={{
        latitude: 33.7838,
        longitude: -118.1141,
        latitudeDelta: 0.015,
        longitudeDelta: 0.04,
      }} >
        <Marker coordinate = {{latitude: 33.76151900699398,
        longitude: -118.11636383180144}}
        image={require('./../assets/store_icon.png')}>
          <Callout>
            <Text style ={styles.storename}>6290 Pacific Coast Hwy</Text>
          </Callout>
        </Marker>
        <Marker coordinate = {{latitude: 33.79385160286719,
        longitude: -118.14131296720306}}
        image={require('./../assets/store_icon.png')}>
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
    flex: 1
  },
  map: {
    width: Dimensions.get('window').width,
    height: 690
  },
  storename: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nav: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

