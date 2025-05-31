import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'StartTrip'>;
};

const StartTripScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viaje Solicitado</Text>
      <Text style={styles.text}>Recoger al estudiante en el punto Asignado</Text>
      <Button title="Aceptar Viaje" onPress={() => navigation.navigate('TripInProgress')} />
    </View>
  );
};

export default StartTripScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20, color: "#ffffff" },
  text: {color: '#ffffff'}
});