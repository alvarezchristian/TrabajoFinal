import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaTrabajadores from './pantallas/ListaTrabajadores';
import AgregarTrabajador from './pantallas/AgregarTrabajador';
import AgregarRol from './pantallas/AgregarRol';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/*const DrawerNavigator = () =>
{
  return ()
}*/
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Lista Trabajadores">
            <Drawer.Screen name="Lista Trabajadores" component={ListaTrabajadores} />
            <Drawer.Screen name="Agregar Trabajador" component={AgregarTrabajador} />
            <Drawer.Screen name="Agregar Rol" component={AgregarRol} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}