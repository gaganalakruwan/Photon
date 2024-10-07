import React, {useEffect, useState} from 'react';
import InputText from '../../components/InputText/InputText';
import styles from './style';
import {
  Alert,
  LogBox,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import ActionButton from '../../components/ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import {colors} from '../../constants/colors';
import {loginFunction} from '../../service/api';
import {useDispatch, useSelector} from 'react-redux';
import {setToken, setUsername} from '../../redux/action/authAction';

const Login: React.FC<StackScreenProps<StackParameterList, 'LOGIN'>> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
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

  const login = () => {
    var data = new FormData();
    data.append('username', email);
    data.append('password', password);
    loginFunction(data)
      .then(res => {
        console.log(res.data);
        if (res.data?.status) {
          dispatch(setToken(res.data.access_token));
          dispatch(setUsername(email));
          navigation.navigate('STARTING' as never);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        animated={true}
        backgroundColor={colors.iconGray}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={styles.container}>
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
          <TouchableOpacity style={styles.forgotPasscodeView}>
            <Text style={styles.forgotPasscodeText}>Forgot Passcode?</Text>
          </TouchableOpacity>

          <View style={styles.socialLoginContainer}>
            <Text style={styles.socialLoginText}>or login with</Text>
            <View style={styles.socialIconsContainer}>
              <TouchableOpacity style={styles.iconContainer}>
                <CustomIcon
                  type={'FontAwesome'}
                  icon={'google'}
                  size={25}
                  color={colors.green}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <CustomIcon
                  type={'Ionicons'}
                  icon={'logo-facebook'}
                  size={25}
                  color={colors.green}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer}>
                <CustomIcon
                  type={'Ionicons'}
                  icon={'finger-print'}
                  size={25}
                  color={colors.green}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ActionButton
            title={'Login'}
            onPress={() => login()} // Changed 'MAIN_HOME' to 'START1'
            containerStyle={{alignSelf: 'center', marginTop: 30, height: 50}}
            textStyle={{fontWeight: '600', fontSize: 16}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
