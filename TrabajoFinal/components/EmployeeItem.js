import {Text, View, Pressable } from "react-native";
import React from "react";
import {estilos_employee_item} from "/workspaces/TrabajoFinal/TrabajoFinal/estilos"
  
const EmployeeItem = (props) => {
  return (
    <Pressable
      onPress={() => alert( props.itemData.item["nombre"] + " " +
      props.itemData.item["apellido"] + " " + 
      props.itemData.item["dni"] + " " + 
      props.itemData.item["rol"] + " " )}
    >
      <View style={estilos_employee_item.contactItem}>
        <Text style={estilos_employee_item.contactText}>
          {
             props.itemData.item["nombre"] + " " +
             props.itemData.item["apellido"] + " " + 
             props.itemData.item["dni"] + " " + 
             props.itemData.item["rol"] + " " 
          }
        </Text>
        
      </View>
    </Pressable>
  );
};

export default EmployeeItem;
