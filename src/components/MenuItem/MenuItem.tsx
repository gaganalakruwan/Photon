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
import {colors} from '../../constants/colors';

type props = {
  onPress?: () => void;
  type: any;
  name: string;
  title?: string;
  rightIconType?: any;
  rightIconName?: string;
  iconContainerStyles?: any;
  size?: number;
  iconColor?: any;
};

const MenuItem = ({
  onPress,
  type,
  name,
  title,
  rightIconType,
  rightIconName,
  iconContainerStyles,
  size,
  iconColor,
}: props) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.rowContainer}>
        <View style={styles.iconAndTextContainer}>
          <View style={[styles.iconContainer, iconContainerStyles]}>
            <CustomIcon
              type={type}
              icon={name}
              size={size}
              color={iconColor || colors.green}
            />
          </View>
          <Text style={styles.menuItemText}>{title}</Text>
        </View>
        {rightIconType && rightIconName && (
          <View style={styles.rightIcon}>
            <CustomIcon
              type={rightIconType}
              icon={rightIconName}
              size={size}
              color={iconColor || colors.green}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
