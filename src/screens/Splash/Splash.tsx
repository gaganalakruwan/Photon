import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ActionButton from '../../components/ActionButton/ActionButton';
import {NAVIGATION_STACK} from '../../constants/routs';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const Splash: React.FC<StackScreenProps<StackParameterList, 'SPLASH'>> = ({
  navigation,
}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Splash</Text>
      <ActionButton
        title="Login"
        onPress={() => navigation.navigate('MAIN_AUTH')}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
