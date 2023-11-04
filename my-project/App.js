import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TelaPrincipal from './pages/TelaPrincipal';
import TelaCadastro from './pages/TelaCadastro';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    
      <Stack.Navigator initialRouteName="TelaPrincipal">
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
      </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    
    <View style={styles.container}>
      <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
