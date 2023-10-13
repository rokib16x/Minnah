import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);
  const [latitude, setLatitude] = useState(23.798564465063915);
  const [longitude, setLongitude] = useState(90.45005504971012);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={latitude},{longitude}&radius=10000&type=mosque&key=AIzaSyCpQgZMyxH1eW7_41Hhu-R9HpBTcplqKOY'
          .replace('{latitude}', latitude)
          .replace('{longitude}', longitude)
        );

        if (response.data && response.data.results) {
          setMarkers(response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.place_id}
            coordinate={{
              latitude: marker.geometry.location.lat,
              longitude: marker.geometry.location.lng,
            }}
            title={marker.name}
            description={marker.vicinity}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;