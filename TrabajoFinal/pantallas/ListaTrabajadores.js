import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function ListaTrabajadores({ navigation, route }) {
  const [workers, setWorkers] = useState([]);
  const { newWorker } = route.params || { newWorker: null };

  const addWorker = (newWorkerData) => {
    setWorkers([...workers, newWorkerData]);
  };

  useEffect(() => {
    if (newWorker) {
      addWorker(newWorker);
      navigation.setParams({ newWorker: null }); // Restablecer el nuevo trabajador
    }
  }, [newWorker]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Trabajadores</Text>
      <Button
        title="Agregar Trabajador"
        onPress={() => navigation.navigate('AgregarTrabajador')}
      />
      <FlatList
        data={workers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.workerItem}>
            <Text style={styles.workerText}>Nombres: {item.nombres}</Text>
            <Text style={styles.workerText}>DNI: {item.dni}</Text>
            <Text style={styles.workerText}>Apellido Paterno: {item.apellidoPaterno}</Text>
            <Text style={styles.workerText}>Apellido Materno: {item.apellidoMaterno}</Text>
            <Text style={styles.workerText}>Edad: {item.edad}</Text>
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
  workerItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  workerText: {
    fontSize: 16,
    marginBottom: 5,
  },
});