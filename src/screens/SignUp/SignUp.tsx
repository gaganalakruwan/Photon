import React, {useState} from 'react';
import InputText from '../../components/InputText/InputText';
import {Alert, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import ActionButton from '../../components/ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import styles from './style';

// Define a function to handle the signup process

const SignUp: React.FC<StackScreenProps<StackParameterList, 'SIGN_UP'>> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <InputText
          label="Name"
          value={name}
          onChangeText={setName}
          // placeHolder={''}
        />
        <InputText
          label="Email"
          value={email}
          onChangeText={setEmail}
          // placeHolder={''}
        />
        <InputText
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          // placeHolder={''}
        />
        <ActionButton
          title={'Sign Up'}
          onPress={() => navigation.navigate('MAIN_HOME' as never)}
          containerStyle={{alignSelf: 'center', marginTop: 50}}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

//const styles = StyleSheet.create({})
