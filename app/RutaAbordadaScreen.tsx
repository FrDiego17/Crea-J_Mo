import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// ⬇️ Tipo para las props de esta pantalla
type Props = StackScreenProps<RootStackParamList, 'RutaAbordada'>;

export default function RutaAbordadaScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listo para abordar</Text>
      <Text style={styles.subtitulo}>Estás en la ruta de:</Text>
      <Text style={styles.descripcion}>Gasolinera Puma Apopa → Universidad Don Bosco</Text>

      <Ionicons name="time-outline" size={64} color="#007bff" style={{ marginVertical: 20 }} />

      <Text style={styles.tiempo}>Tiempo estimado:</Text>
      <Text style={styles.rango}>20 a 30 minutos</Text>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.popToTop()}>
        <Text style={styles.botonTexto}>Ver mi viaje</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonSecundario}>
        <Text style={styles.botonSecundarioTexto}>No abordar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f8ff', alignItems: 'center', justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitulo: { fontSize: 16 },
  descripcion: { fontSize: 16, color: '#555', marginBottom: 20, textAlign: 'center' },
  tiempo: { fontSize: 18 },
  rango: { fontSize: 18, fontWeight: 'bold', color: '#007bff', marginBottom: 30 },

  boton: { backgroundColor: '#007bff', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center', marginBottom: 10 },
  botonTexto: { color: 'white', fontWeight: 'bold', fontSize: 16 },

  botonSecundario: { padding: 10 },
  botonSecundarioTexto: { color: '#007bff', fontSize: 16 },
});
