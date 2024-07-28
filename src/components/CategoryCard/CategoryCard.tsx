import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './style';

type Props = {
  imageUrl: string | number; // Updated to allow both string (URL) and number (require)
  category: string;
  onPress?: () => void;
};

const CategoryCard = ({imageUrl, category, onPress}: Props) => {
  // Determine if the imageUrl is a string (URL) or a number (require)
  const imageSource = typeof imageUrl === 'string' ? {uri: imageUrl} : imageUrl;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.categoryName}>{category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
