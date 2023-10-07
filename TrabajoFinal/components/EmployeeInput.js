import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React from "react";
import { estilos_employee_input } from "/workspaces/TrabajoFinal/TrabajoFinal/estilos"
import ComboBox from "./ComboBox";
import { useState } from 'react';

const EmployeeInput = (props) => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [dni, setDni] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState('admin');

  const items = [
    { label: 'Administrador', value: 'Admin' },
    { label: 'Contador', value: 'Contador' },
    { label: 'Almacenero', value: 'Almacenero' },
  ];


  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const addTrabajadorHandler = () => {
    if (nombre === "" || apellido === "" || dni === "") {
      alert("Ingrese los datos");
      return;
    }
    const data = {
      id: Math.random().toString(),
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      rol: selectedValue
    }
    props.onAddTrabajadorHandler(data);
    blankContactFields();
    hideModal(false);
  };

  const blankContactFields = () => {
    setNombre("");
    setApellido("");
    setDni("");
  }

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Modal visible={modalVisible} animationType="slide">
        <View style={estilos_employee_input.inputContainer}>
          <TextInput
            style={estilos_employee_input.textInput}
            placeholder="Nombre"
            placeholderTextColor={"#cccccc"}
            onChangeText={(text) => setNombre(text)}
            value={nombre}
          />

          <TextInput
            style={estilos_employee_input.textInput}
            placeholder="Apellido"
            placeholderTextColor={"#cccccc"}
            onChangeText={(text) => setApellido(text)}
            value={apellido}
          />

          <TextInput
            style={estilos_employee_input.textInput}
            placeholder="DNI"
            placeholderTextColor={"#cccccc"}
            onChangeText={(text) => setDni(text)}
            value={dni}
            keyboardType="number-pad"
          />
          <ComboBox
            style={estilos_employee_input.textInput}
            items={items}
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
          />
          <TouchableOpacity style={estilos_employee_input.button} onPress={addTrabajadorHandler}>
            <Text style={estilos_employee_input.buttonText}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos_employee_input.button} onPress={hideModal}>
            <Text style={estilos_employee_input.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity style={estilos_employee_input.button} onPress={showModal}>
        <Text style={estilos_employee_input.buttonText}>Registrar Trabajador</Text>
      </TouchableOpacity>

    </>
  );
};

export default EmployeeInput;


