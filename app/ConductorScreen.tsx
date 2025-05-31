import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';

const ConductorScreen = () => {
  const router = useRouter();

  const initialRegion = {
    latitude: 13.6929,    
    longitude: -89.2182,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, Conductor</Text>

      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={initialRegion} title="Ubicación Actual" />
      </MapView>

      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar Viaje"
          color="#007bff"
          onPress={() => router.push('/StartTripScreen')}
        />
      </View>
    </View>
  );
};

export default ConductorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
