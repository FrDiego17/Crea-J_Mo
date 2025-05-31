import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RutasScreen from './app/RutasScreen';
import DetalleRutaScreen from './app/DetalleRutaScreen';
import RutaAbordadaScreen from './app/RutaAbordadaScreen';

import { RootStackParamList } from './types'; // asegúrate que este archivo existe

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Rutas" component={RutasScreen} />
        <Stack.Screen name="DetalleRuta" component={DetalleRutaScreen} />
        <Stack.Screen name="RutaAbordada" component={RutaAbordadaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
