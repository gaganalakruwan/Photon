import {Text, View, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import {colors} from '../../constants/colors';
interface TextInputWithLableProps {
  label: string;
  value: string;
  placeHolder?: string;
  onChangeText: (text: string) => void;
  placeholderTextColor?: string;
  keyboardType?: any;
}

const TextInputWithLable: React.FC<TextInputWithLableProps> = ({
  label,
  placeHolder,
  value,
  onChangeText,
  placeholderTextColor,
  keyboardType,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        placeholderTextColor={colors.darkGray}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextInputWithLable;
