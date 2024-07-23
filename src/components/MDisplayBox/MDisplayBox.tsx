// MDisplayBox.tsx - Box of Macinery Display in the list

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

interface MDisplayBoxProps {
  imageSource: string;
  title: string;
  description: string;
}

const MDisplayBox: React.FC<MDisplayBoxProps> = ({
  imageSource,
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageSource}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MDisplayBox;
