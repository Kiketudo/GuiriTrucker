import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from './context';


const LanguageSelector = ({ navigation }) => {
  const { setLanguage, t } = useLanguage();
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'ru', name: 'Русский' },
    { code: 'pt', name: 'Português' },
    { code: 'ro', name: 'Română' },
    { code: 'it', name: 'Italiano' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'ar', name: 'العربية' },
    { code: 'pl', name: 'Polski' },
    { code: 'uk', name: 'Українська' },
    // Agrega más idiomas según sea necesario
  ];

  const handleLanguageSelect = (code) => {
    setLanguage(code);
    navigation.navigate('Registro');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.selectLanguage}</Text>
      <View style={styles.languagesContainer}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.code}
            style={styles.button}
            onPress={() => handleLanguageSelect(language.code)}
          >
            <Text style={styles.buttonText}>{language.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default LanguageSelector;
