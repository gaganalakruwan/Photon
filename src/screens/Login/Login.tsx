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
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <InputText
          label="Email"
          value={email}
          onChangeText={setEmail}
          
        />
        <InputText
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          
        />
        <ActionButton
          title={'Login'}
          onPress={() => navigation.navigate('START1' as never)} // Changed 'MAIN_HOME' to 'START1'
          containerStyle={{alignSelf: 'center', marginTop: 50}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

//const styles = StyleSheet.create({});
