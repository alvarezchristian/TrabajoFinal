import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ListaTrabajadores() {
  const [workers, setWorkers] = useState([]);
  const [newWorker, setNewWorker] = useState('');

  const addWorker = () => {
    if (newWorker) {
      setWorkers([...workers, newWorker]);
      setNewWorker('');
    }
  };

  const updateWorker = (index, updatedName) => {
    const updatedWorkers = [...workers];
    updatedWorkers[index] = updatedName;
    setWorkers(updatedWorkers);
  };

  const deleteWorker = (index) => {
    const updatedWorkers = [...workers];
    updatedWorkers.splice(index, 1);
    setWorkers(updatedWorkers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Trabajadores</Text>
      <TextInput
        style={styles.input}
        placeholder="Nuevo Trabajador"
        value={newWorker}
        onChangeText={(text) => setNewWorker(text)}
      />
      <Button title="Agregar" onPress={addWorker} />
      <FlatList
        data={workers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.workerItem}>
            <TextInput
              style={styles.workerInput}
              value={item}
              onChangeText={(text) => updateWorker(index, text)}
            />
            <Button title="Eliminar" onPress={() => deleteWorker(index)} />
          </View>
        )}
      />
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
  workerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  workerInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});