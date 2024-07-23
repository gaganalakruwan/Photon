import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

interface IconButtonProps {
  image: any;
  label: string;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({image, label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
