import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, RutaType } from '../types'; // ajusta la ruta si es necesario

type Props = StackScreenProps<RootStackParamList, 'Rutas'>;

const rutas: RutaType[] = [
  { id: '1', destino: 'Apopa', nombre: 'Antonio Montana', tipo: 'Bus' },
  { id: '2', destino: 'San Martín', nombre: 'Alejandro Dominguez', tipo: 'Microbus' },
  // agrega más rutas...
];

export default function RutasScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rutas</Text>
      <FlatList
        data={rutas}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetalleRuta', { ruta: item })}
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
