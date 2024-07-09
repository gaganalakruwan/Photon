import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStackNavigator from './src/navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthStackNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
