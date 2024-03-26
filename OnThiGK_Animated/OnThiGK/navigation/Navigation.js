import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bai01 from '../screens/Bai01';

import Bai03 from '../screens/Bai03';
import Bai02 from '../screens/Bai02';

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name='Bai01' component={Bai01} /> */}
                {/* <Stack.Screen name='Bai02' component={Bai03} /> */}
                <Stack.Screen name='Bai02' component={Bai02} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation