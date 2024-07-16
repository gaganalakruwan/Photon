import React from 'react';
import { View, TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';



interface TextInputFieldProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  icon?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ containerStyle, icon, ...props }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={styles.input} {...props} />
      {icon && <Icon name={icon} size={20} color="gray" style={styles.icon} />}
    </View>
  );
};

export default TextInputField;
