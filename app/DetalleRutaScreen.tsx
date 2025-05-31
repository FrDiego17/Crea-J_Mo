import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'DetalleRuta'>;

export default function DetalleRutaScreen({ route, navigation }: Props) {
  const { ruta } = route.params;

  const horariosEntrada = [
    { parada: 'Gasolinera Puma', hora: '6:00 am' },
    { parada: 'Pericentro Apopa', hora: '6:10 am' },
    { parada: 'Plaza Mundo Apopa', hora: '6:15 am' },
    { parada: 'Mega Paca Apopa', hora: '6:20 am' },
    { parada: 'Carretera de Oro-Uldi', hora: '6:45 am' },
  ];

  const horariosSalida = [
    { parada: 'Universidad Don Bosco', hora: '9:30 am' },
    { parada: 'Paso a desnivel de Apopa', hora: '11:30 am' },
    { parada: 'Plaza Mundo Apopa', hora: '1:30 pm' },
    { parada: 'Pericentro Apopa', hora: '3:30 pm' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nombre}>{ruta.nombre}</Text>
        <Text style={styles.destino}>{ruta.destino}</Text>
        <Text style={styles.tipo}>{ruta.tipo}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitulo}>Entrada</Text>
        {horariosEntrada.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.texto}>{item.parada}</Text>
            <Text style={styles.hora}>{item.hora}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitulo}>Salida</Text>
        {horariosSalida.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.texto}>{item.parada}</Text>
            <Text style={styles.hora}>{item.hora}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('RutaAbordada')}>
        <Text style={styles.botonTexto}>Abordar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f8ff', padding: 20 },
  header: { alignItems: 'center', marginBottom: 20 },
  nombre: { fontSize: 20, fontWeight: 'bold' },
  destino: { fontSize: 18, color: '#555' },
  tipo: { fontSize: 16, color: '#888' },

  section: { marginVertical: 10 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', color: '#007bff', marginBottom: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, borderBottomWidth: 0.5, borderColor: '#ccc' },
  texto: { fontSize: 16 },
  hora: { fontSize: 16, color: '#007bff' },

  boton: { marginTop: 30, backgroundColor: '#007bff', padding: 15, borderRadius: 12, alignItems: 'center' },
  botonTexto: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
