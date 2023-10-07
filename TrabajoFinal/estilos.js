import { StyleSheet} from 'react-native';

export const estilos = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      contactsContainer: {
        paddingTop: 50,
        paddingLeft: 50,
        flex: 5,
        backgroundColor: "#e3fae3",
      },
  });

export const estilos_employee_input = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: "column",
        marginTop: 80,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 10,
        alignSelf: "center",
        padding: 10,
        borderRadius: 5,
        overflow: "hidden",
        marginBottom: 10
      },
      button: {
        marginTop: 10,
        height: 60,
        alignSelf: "center",
        width: 150,
        borderRadius: 5,
        backgroundColor: "#54c45e",
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        color: "white",
        fontSize: 16,
      },
      
});

export const estilos_employee_item = StyleSheet.create({
    contactItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#cccccc",
        backgroundColor: "white",
        flexDirection: "row",
        flex: 2
      },
      contactText: {
        flex: 1,
        color: "black",
      },
      contactPhone: {
        flex: 1,
        color: "black",
        backgroundColor: "green",
      },
});

  export const estilos_employee_list = StyleSheet.create({
    combobox: {
        width: 150,
        height:40,
    },
    caja: {
      marginTop:90,
      width: "90%",
      flex: 6,
      position: "absolute",
    },
  });

  
