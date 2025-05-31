import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList, RutaType } from '../types'; // ajusta la ruta si es necesario



const rutas: RutaType[] = [
  { id: '1', destino: 'Apopa', nombre: 'Antonio Montana', tipo: 'Bus' },
  { id: '2', destino: 'San Martín', nombre: 'Alejandro Dominguez', tipo: 'Microbus' },
  // agrega más rutas...
];
interface Props {
  route: any;
  navigation: NativeStackNavigationProp<RootStackParamList, 'DetalleRuta'>;
}
export default  (params: any) =>  {
  const navigation: any = useNavigation()
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rutas</Text>
      <FlatList
        data={rutas}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetalleRutaScreen')}
          >
            <Text style={styles.destino}>{item.destino}</Text>
            <Text>{item.nombre}</Text>
            <Text style={styles.tipo}>{item.tipo}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f8ff', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  destino: { fontSize: 18, fontWeight: 'bold' },
  tipo: { color: 'gray' },
});
