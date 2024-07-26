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
  type?: string;
  iconName?: string;
  title?: string;
};
const MenuItem = ({onPress, type, iconName, title}: props) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.rowContaianer}>
        <TouchableOpacity style={styles.IconContainer}>
          {/* <Icon name={iconName} size={24} color="#158282" /> */}
          <CustomIcon type={type} icon={iconName}></CustomIcon>
        </TouchableOpacity>
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
