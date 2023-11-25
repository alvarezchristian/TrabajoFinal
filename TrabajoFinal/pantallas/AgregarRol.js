import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AgregarRol({ navigation }) {
  const [rol, setRol] = useState('');

  const handleAgregar = () => {
    if (rol) {
      navigation.goBack();
    }
  };

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
      <Text style={styles.title}>Agregar Rol</Text>
      <TextInput
        style={styles.input}
        placeholder="Rol"
        value={rol}
        onChangeText={(text) => setRol(text)}
      />
      <Button title="Agregar" onPress={handleAgregar} />
    </ImageBackground>
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