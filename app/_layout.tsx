import { DarkTheme, DefaultTheme, DrawerActionType, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {Drawer} from 'expo-router/drawer';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons, AntDesign, FontAwesome  } from '@expo/vector-icons';
import { DrawerContent, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


function CustomDrawerContent(props: DrawerContentComponentProps){
  return(
    <DrawerContentScrollView{...props}>
      < DrawerItemList{...props}/>
    </DrawerContentScrollView>
  )
}
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    //Le dice a la App si usar modo claro u oscuro
    //Stack define las pantallas de navegación por pila

    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> 
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
          <Stack.Screen name="SignupScreen" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>*/}

      <Drawer
        screenOptions={{
            drawerHideStatusBarOnOpen: true,
        }}>
          <Drawer.Screen
            name="(tabs)"
            options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
            drawerIcon: ({ color, size }) => <AntDesign  name="home" size={size} color={color} />
          }}
          />
          <Drawer.Screen
            name="MapView"
            options={{
            drawerLabel: 'Mapa',
            title: 'Inicio',
            drawerIcon: ({ color, size }) => <FontAwesome  name="map" size={size} color={color} />
          }}
          />
          <Drawer.Screen
            name="LoginScreen"
            options={{
            drawerLabel: 'Inicio de Sesión',
            title: 'Inicio de Sesión',
            drawerIcon: ({ color, size }) => <AntDesign name="login" size={size} color={color} />
          }}
          />
          <Drawer.Screen
            name="SignupScreen"
            options={{
            drawerLabel: 'Registrarse',
            title: 'Registro',
            drawerIcon: ({ color, size }) => <FontAwesome  name="pencil-square-o" size={size} color={color} />
          }}
          />
          <Drawer.Screen
            name="RutasScreen"
            options={{
            drawerLabel: 'Rutas',
            title: 'Rutas',
            drawerIcon: ({ color, size }) => <FontAwesome  name="map-pin" size={size} color={color} />
          }}
          />
          <Drawer.Screen
            name="SettingsScreen"
            options={{
            drawerLabel: 'Ajustes',
            title: 'Ajustes',
            drawerIcon: ({ color, size }) => <AntDesign  name="setting" size={size} color={color} />
          }}
          />
          <Drawer.Screen
            name="+not-found"
            options={{
            drawerItemStyle:{
              display: 'none',
            },
          }}
          />
          <Drawer.Screen
            name="DetalleRutaScreen"
            options={{
            drawerItemStyle:{
              display: 'none',
            },
          }}
          />
          <Drawer.Screen
            name="RutaAbordadaScreen"
            options={{
            drawerItemStyle:{
              display: 'none',
            },
          }}
          />
          <Drawer.Screen
            name="StartTripScreen"
            options={{
            drawerItemStyle:{
              display: 'none',
            },
          }}
          />
          <Drawer.Screen
            name="ConductorScreen"
            options={{
            drawerLabel: 'Conductor mapa',
            title: 'Mapa',
            drawerIcon: ({ color, size }) => <FontAwesome  name="map" size={size} color={color} />
          }}
          />
          
      </Drawer>
    </GestureHandlerRootView>
  );
}


