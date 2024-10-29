import React, {useState} from 'react';
import InputText from '../../components/InputText/InputText';
import {Alert, StatusBar, TouchableOpacity, View} from 'react-native';
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
import {useDispatch} from 'react-redux';
import {
  endLoading,
  setSpinnerMessage,
  startLoading,
} from '../../redux/action/SpinnerAction';
import {SignUpFunction} from '../../service/api';

const SignUp: React.FC<StackScreenProps<StackParameterList, 'SIGN_UP'>> = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const userSignUpFunction = async () => {
    dispatch(setSpinnerMessage('Saving User Details...'));
    dispatch(startLoading());

    const data = new FormData();
    data.append('accountname', name);
    data.append('username', email);
    data.append('password', password);

    try {
      const res = await SignUpFunction(data);
      if (res.data.status === 200) {
        dispatch(endLoading());

        // Show success alert with auto-close
        Alert.alert('Success', 'User registered successfully', [
          {
            text: 'OK',
            onPress: () => {
              // Clear fields and navigate to Login screen
              setName('');
              setEmail('');
              setPassword('');
              navigation.navigate('Login' as never);
            },
          },
        ]);
      } else {
        dispatch(endLoading());
        Alert.alert('Error', 'Something went wrong or user already exists');
      }
    } catch (error) {
      dispatch(endLoading());
      console.log(error);
      Alert.alert('Error', 'Something went wrong');
    }
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
            onPress={userSignUpFunction}
            containerStyle={{alignSelf: 'center', marginTop: 60, height: 50}}
            textStyle={{fontWeight: '600', fontSize: 16}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
