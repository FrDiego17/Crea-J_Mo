import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import DetalleRutaScreen from './app/DetalleRutaScreen';
import RutaAbordadaScreen from './app/RutaAbordadaScreen';
import RutasScreen from './app/RutasScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rutas">
          {(props)=> <RutasScreen {...props} />}
          </Stack.Screen>
        <Stack.Screen name="DetalleRuta" component={DetalleRutaScreen} />
        <Stack.Screen name="RutaAbordada" component={RutaAbordadaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
