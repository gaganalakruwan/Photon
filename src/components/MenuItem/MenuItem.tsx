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
import CustomIcon from '../CustomIcon/CustomIcon';

type props = {
  onPress?: () => void;
  type: any;
  name: string;
  title?: string;
};
const MenuItem = ({onPress, type, name, title}: props) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.rowContaianer}>
        <TouchableOpacity style={styles.IconContainer} onPress={onPress}>
          {/* <Icon name={iconName} size={24} color="#158282" /> */}
          <CustomIcon type={type} icon={name}></CustomIcon>
        </TouchableOpacity>
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
