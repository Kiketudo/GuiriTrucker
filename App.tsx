import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LanguageSelector from './components/inicio';
import Register from './components/form';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LanguageProvider } from './components/context';
import DisplayData  from './components/ver';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={LanguageSelector} />
          <Stack.Screen name="Registro" component={Register} />
          <Stack.Screen name="Datos" component={DisplayData} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
};

export default App;
