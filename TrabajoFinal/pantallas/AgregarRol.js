import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AgregarRol({ navigation }) {
  const [rol, setRol] = useState('');

  const handleAgregar = () => {
    if (rol) {
      // Puedes realizar acciones con el nuevo rol aquí (almacenarlo, enviarlo a un servidor, etc.)
      // En este ejemplo, simplemente navegamos hacia atrás.
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Rol</Text>
      <TextInput
        style={styles.input}
        placeholder="Rol"
        value={rol}
        onChangeText={(text) => setRol(text)}
      />
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