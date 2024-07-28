import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './style';
import {colors} from '../../constants/colors';
import {RadioButton} from 'react-native-paper';

type props = {
  onPress?: () => void;
  value: string;
  status: any;
  color?: string;
  text?: string;
};
const CustomRadioButton = ({onPress, value, status, color, text}: props) => {
  return (
    <View style={styles.radioButtonView}>
      <RadioButton
        value={value}
        status={status}
        color={colors.green}
        onPress={onPress}
      />
      <Text style={styles.radioText}>{text}</Text>
    </View>
  );
};

export default CustomRadioButton;
