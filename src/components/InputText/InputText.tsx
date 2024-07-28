import {Text, View, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import {colors} from '../../constants/colors';
interface InputTextProps {
  label: string;
  value: string;
  placeHolder?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  placeHolder,
  value,
  onChangeText,
  placeholderTextColor,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        placeholderTextColor={colors.darkGray}
      />
    </View>
  );
};

export default InputText;
