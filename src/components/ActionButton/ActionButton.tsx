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
  
  type props = {
    onPress: () => void;
    title: string;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
  };
  const ActionButton = ({onPress, containerStyle, textStyle, title}: props) => {
    return (
      <TouchableOpacity style={[styles.container,containerStyle]} onPress={onPress}>
        <Text style={[styles.text,textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  export default ActionButton;