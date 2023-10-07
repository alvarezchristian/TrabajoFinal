import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { estilos,estilos_employee_list } from "/workspaces/TrabajoFinal/TrabajoFinal/estilos"
import React from "react";
import EmployeeInput from "./components/EmployeeInput";
import EmployeeList from "./components/EmployeeList";

export default function App() {
  const [trabajadores, setTrabajadores] = React.useState([]);

  const addTrabajadorHandler = (trabajador) => {
    setTrabajadores((trabajadorActual) => [
      ...trabajadorActual,
      trabajador,
    ]);
  };

  const deleteContactHandler = (id) => {
    setTrabajadores((trabajadorActual) => {
      return trabajadorActual.filter((trabajador) => trabajador.id !== id);
    });
  };


  return (
    <SafeAreaView style={estilos.contactsContainer}>
      <View >
        <EmployeeInput onAddTrabajadorHandler={addTrabajadorHandler} />

        <View style={estilos_employee_list.caja}>
          <EmployeeList
            trabajadores={trabajadores}
            deleteContactHandler={deleteContactHandler}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}
