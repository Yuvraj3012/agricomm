import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import MapView from 'react-native-maps';
import { useState } from 'react';
import { Marker } from 'react-native-maps';
import events from '../../assets/data/events.json'

export default function MapScreen() {
  const [region, SetRegion] = useState({
    latitude: 28.7041,
    longitude: 77.1025,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  console.log('region: ', region);
  return (
    <View>
      <MapView
        showsUserLocation

        initialRegion={region}
        onRegionChange={SetRegion}
        style={styles.map}>

        {events.map((event) => (
          <Marker coordinate={{ 
            latitude: event.latitude, 
            longitude: event.longitude,
           }}
           title={event.title}
           description={event.description} />
           
        ))}
        

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: '100%',
  },

});
