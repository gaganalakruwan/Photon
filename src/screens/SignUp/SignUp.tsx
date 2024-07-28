import React, {useState} from 'react';
import InputText from '../../components/InputText/InputText';
import {Alert, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import ActionButton from '../../components/ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import styles from './style';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import {colors} from '../../constants/colors';
import {ScrollView} from 'react-native-gesture-handler';

// Define a function to handle the signup process

const SignUp: React.FC<
  StackScreenProps<StackParameterList, 'SIGN_UP'>
> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <InputText
            label="Name"
            value={name}
            onChangeText={setName}
            placeHolder="Sample"
          />

          <InputText
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeHolder="Sample@gmail.com"
          />
          <View>
            <InputText
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeHolder="**********"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.passwordIcon}
              onPress={() => setShowPassword(!showPassword)}>
              <CustomIcon
                type={'FontAwesome'}
                icon={showPassword ? 'eye' : 'eye-slash'}
                size={20}
                color={colors.green}
              />
            </TouchableOpacity>
          </View>
          <ActionButton
            title={'Sign Up'}
            onPress={() => navigation.navigate('MAIN_HOME' as never)}
            containerStyle={{alignSelf: 'center', marginTop: 60, height: 50}}
            textStyle={{fontWeight: '600', fontSize: 16}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
