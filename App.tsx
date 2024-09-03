import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStackNavigator from './src/navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import Spinner from './src/components/Spinner/Spinner';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AuthStackNavigator />
          <Spinner />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
