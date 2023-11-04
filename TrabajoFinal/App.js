import React from 'react';
import { View } from 'react-native';
import ListaTrabajadores from './pantallas/ListaTrabajadores';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ListaTrabajadores />
    </View>
  );
}