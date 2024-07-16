import React, {useState} from 'react';
import InputText from '../../components/InputText/InputText';
import styles from './style';
import {Alert, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import ActionButton from '../../components/ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';

const Login: React.FC<StackScreenProps<StackParameterList, 'LOGIN'>> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const email = 'test@example.com';
    const password = 'password';
    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Login Successful', 'Welcome to the app!');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
    console.log('Login button pressed');
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InputText
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeHolder={''}
        />
        <InputText
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeHolder={''}
        />
      </View>
      <ActionButton
        title={'Login'}
        onPress={() => navigation.navigate('MAIN_HOME' as never)}
        containerStyle={{width: 300}}
      />
    </SafeAreaView>
  );
};

export default Login;

//const styles = StyleSheet.create({});
