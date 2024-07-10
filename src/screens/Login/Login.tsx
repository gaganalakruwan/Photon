import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import ActionButton from '../../components/ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';

const Login: React.FC<StackScreenProps<StackParameterList, 'LOGIN'>> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text style={{color: 'black'}}>Login</Text>
      <ActionButton
        title={'Home'}
        onPress={() => navigation.navigate('MAIN_HOME' as never)}
        containerStyle={{width: 200}}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
