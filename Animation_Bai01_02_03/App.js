import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai04 from './Screens/Bai04';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Bai05 from './Screens/Bai05';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Bai04' component={Bai04} /> */}
        <Stack.Screen name='Bai05' component={Bai05} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
