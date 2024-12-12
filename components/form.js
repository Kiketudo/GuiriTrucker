import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { LanguageProvider, useLanguage } from './context';

const FormContent = ({ navigation }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    dni: '',
    destino: '',
    licensePlate: '',
    trailer: '',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    navigation.navigate('Datos', { formData });
  };

  if (!t) {
    return <Text>Error: Contexto de idioma no encontrado</Text>;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.form}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>{t.name}</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(value) => handleChange('name', value)}
              />
              <Text style={styles.label}>{t.surname}</Text>
              <TextInput
                style={styles.input}
                value={formData.surname}
                onChangeText={(value) => handleChange('surname', value)}
              />
              <Text style={styles.label}>{t.dni}</Text>
              <TextInput
                style={styles.input}
                value={formData.dni}
                onChangeText={(value) => handleChange('dni', value)}
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>{t.destino}</Text>
              <TextInput
                style={styles.input}
                value={formData.destino}
                onChangeText={(value) => handleChange('destino', value)}
              />
              <Text style={styles.label}>{t.licensePlate}</Text>
              <TextInput
                style={styles.input}
                value={formData.licensePlate}
                onChangeText={(value) => handleChange('licensePlate', value)}
              />
              <Text style={styles.label}>{t.trailer}</Text>
              <TextInput
                style={styles.input}
                value={formData.trailer}
                onChangeText={(value) => handleChange('trailer', value)}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Form = ({ navigation }) => {
  return (
      <FormContent navigation={navigation} />
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  row: {
    flexDirection: 'row', // Coloca los campos en una fila
  },
  column: {
    flex: 1, // Cada columna ocupa el mismo espacio
    padding: 10,
  },
  label: {
    fontSize: 20, // Aumenta el tamaño de las etiquetas
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  button: {
    flex: 1, // Los botones ocupan el mismo espacio
    padding: 20, // Aumenta el padding para hacer los botones más grandes
    margin: 10, // Aumenta el margen para más espacio entre botones
    backgroundColor: '#007BFF',
    borderRadius: 10, // Aumenta el radio para bordes más redondeados
  },
 buttonText: {
    fontSize: 18, // Aumenta el tamaño de la fuente
    color: '#FFFFFF',
    textAlign: 'center', // Centra el texto en los botones
  },
});
export default Form;