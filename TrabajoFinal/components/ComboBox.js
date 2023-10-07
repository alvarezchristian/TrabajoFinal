import React, { useState } from 'react';
import  View  from 'react-native';
import  Picker from '@react-native-picker/picker';

const ComboBox = ({ items, selectedValue, onValueChange }) => {
    console.log(items)
    return (
      <View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
        >
          {items.map((item, index) => (
            <Picker.Item label={item.label} value={item.value} key={index} />
          ))}
        </Picker>
      </View>
    );
  };

export default ComboBox;
