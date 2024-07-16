import {Text, View, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
interface InputTextProps {
  label: string;
  value: string;
  // placeHolder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  // placeHolder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        // placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <View style={styles.underline} />
    </View>
  );
};

export default InputText;
