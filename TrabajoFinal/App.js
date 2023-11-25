import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaTrabajadores from './pantallas/ListaTrabajadores';
import AgregarTrabajador from './pantallas/AgregarTrabajador';
import AgregarRol from './pantallas/AgregarRol';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Lista de Trabajadores">
            <Drawer.Screen name="Lista de Trabajadores" component={ListaTrabajadores} />
            <Drawer.Screen name="Agregar Trabajador" component={AgregarTrabajador} />
            <Drawer.Screen name="Agregar Rol" component={AgregarRol} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}