import {Text, View, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import IconI from 'react-native-vector-icons/Ionicons';
import {getScaleNumber} from '../../utils/refDimention';
import {colors} from '../../constants/colors';

type InputTextProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeHolder: string;
};

const InputText: React.FC<InputTextProps> = ({
  value,
  onChangeText,
  placeHolder,
}) => {
  return (
    <View style={styles.container}>
      <IconI name="search" color={colors.iconBlack} size={getScaleNumber(15)} />
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeHolder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputText;
