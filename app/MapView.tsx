import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';

export default function Map(){
  const [origin, setOrigin] = React.useState({
    latitude:13.717033058649768,   //Coordenada para que inicie en ese punto al abrir el mapa
    longitude:-89.1493665210827,
  });

  const [destination, setDestination] = React.useState({
    latitude:13.71515464735614 ,   //Coordenada de destino 
    longitude:-89.14093553363364,
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{    //Se crea un objeto para que al iniciar el mapa sea en ese origen 
          latitude: origin.latitude, 
          longitude: origin.longitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0
        }}
      >
        <Marker //PIN DE ORIGEN
          draggable  //que el Marcador se pueda  tomar y desplazar
          coordinate={origin} 
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)} 
          // Cuando se deje de arrastrar el marcador se actualizara la dirección de origen

        /> 

        <Marker //PIN DE DESTINO
          draggable  //que el Marcador se pueda  tomar y desplazar
          coordinate={destination} 
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)} 
          // Cuando se deje de arrastrar el marcador se actualizara la dirección de origen
        /> 

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor='red' //Color de la línea de la ruta
          strokeWidth={4} // Grosor de la línea de la ruta
        /> 


      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    width: '100%',
    height: '100%',
  }
});
