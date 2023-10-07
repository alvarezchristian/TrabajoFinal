import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = (props) => {
  return (
    <View style={styles.contactsContainer}>
      <FlatList
        data={props.trabajadores}
        renderItem={(itemData) => {
          return (
            <EmployeeItem
              onDeleteContactHandler={props.deleteContactHandler}
              itemData={itemData}
            />
          );
        }}
        keyExtractor={(item, index) => {
          
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default EmployeeList;

const styles = StyleSheet.create({
  contactsContainer: {
    flex: 2,
    backgroundColor: "#D9725B",
    borderRadius: 3,
  },
});
