import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
        }}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="MapView"
          options={{
            drawerLabel: 'Mapa',
            title: 'Mapa',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="map" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="LoginScreen"
          options={{
            drawerLabel: 'Inicio de Sesión',
            title: 'Inicio de Sesión',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="login" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="SignupScreen"
          options={{
            drawerLabel: 'Registrarse',
            title: 'Registro',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="pencil-square-o" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="RutasScreen"
          options={{
            drawerLabel: 'Rutas',
            title: 'Rutas',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="map-pin" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="SettingsScreen"
          options={{
            drawerLabel: 'Ajustes',
            title: 'Ajustes',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}
        />
        {/* Pantallas ocultas del Drawer */}
        <Drawer.Screen name="+not-found" options={{ drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="DetalleRutaScreen" options={{ drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="RutaAbordadaScreen" options={{ drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="StartTripScreen" options={{ drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen
          name="ConductorScreen"
          options={{
            drawerLabel: 'Conductor mapa',
            title: 'Mapa',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="map" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
