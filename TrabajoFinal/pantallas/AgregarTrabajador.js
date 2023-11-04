import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AgregarTrabajador({ navigation }) {
  const [nombres, setNombres] = useState('');
  const [dni, setDNI] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [edad, setEdad] = useState('');
  const [rol, setRol] = useState('');

  const roles = [
    'Gerente',
    'Supervisor',
    'Técnico',
    'Operario',
    'Otro',
  ];

  const handleAgregar = () => {
    if (nombres && dni && apellidoPaterno && apellidoMaterno && edad) {
      const nuevoTrabajador = {
        nombres,
        dni,
        apellidoPaterno,
        apellidoMaterno,
        edad,
        rol,
      };
      navigation.navigate('ListaTrabajadores', { newWorker: nuevoTrabajador });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Trabajador</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombres"
        value={nombres}
        onChangeText={(text) => setNombres(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="DNI"
        value={dni}
        onChangeText={(text) => setDNI(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido Paterno"
        value={apellidoPaterno}
        onChangeText={(text) => setApellidoPaterno(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido Materno"
        value={apellidoMaterno}
        onChangeText={(text) => setApellidoMaterno(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={(text) => setEdad(text)}
      />
      <Picker
        selectedValue={rol}
        onValueChange={(itemValue, itemIndex) => setRol(itemValue)}
      >
        {roles.map((role, index) => (
          <Picker.Item key={index} label={role} value={role} />
        ))}
      </Picker>
      <Button title="Agregar" onPress={handleAgregar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});