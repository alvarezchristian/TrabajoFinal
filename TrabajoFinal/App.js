import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaTrabajadores from './pantallas/ListaTrabajadores';
import AgregarTrabajador from './pantallas/AgregarTrabajador';
import AgregarRol from './pantallas/AgregarRol';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaTrabajadores">
        <Stack.Screen name="ListaTrabajadores" component={ListaTrabajadores} options={{ title: 'Lista de Trabajadores' }} />
        <Stack.Screen name="AgregarTrabajador" component={AgregarTrabajador} options={{ title: 'Agregar Trabajador' }} />
        <Stack.Screen name="AgregarRol" component={AgregarRol} options={{ title: 'Agregar Rol' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}