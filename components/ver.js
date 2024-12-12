import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation  } from '@react-navigation/native';

const DisplayData = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { formData } = route.params;

  const handleGoHome = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
    <View style={styles.row}>
        <View style={styles.column}>
            <Text style={styles.field}>Nombre: {formData.name}</Text>
            <Text style={styles.field}>Apellido: {formData.surname}</Text>
            <Text style={styles.field}>DNI: {formData.dni}</Text>
        </View>
        <View style={styles.column}>
            <Text style={styles.field}>Destino: {formData.destino}</Text>
            <Text style={styles.field}>Matrícula: {formData.licensePlate}</Text>
            <Text style={styles.field}>Remolque: {formData.trailer}</Text>
        </View>
    </View>
      <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
        <Text style={styles.buttonText}>Inicio</Text>
      </TouchableOpacity>
    </View>
  );
 
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    row: {
        flexDirection: 'row', // Coloca los campos en una fila
    },
    column: {
       flex: 1, // Cada columna ocupa el mismo espacio
       padding: 10,
    },
    title: {
      fontSize: 32, // Aumenta el tamaño del título
      marginBottom: 30,
    },
    field: {
      fontSize: 24, // Aumenta el tamaño de los campos
      marginVertical: 15,
    },
    homeButton: {
      marginTop: 30,
      padding: 20,
      backgroundColor: '#007BFF',
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 18,
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });

export default DisplayData;