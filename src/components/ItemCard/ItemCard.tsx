import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CustomIcon from '../CustomIcon/CustomIcon';
import {colors} from '../../constants/colors';

type props = {
  imageUrl: string;
  machineName: string;
  description: string;
  isFavorite?: boolean;
  onReadMore?: () => void;
  onToggleFavorite?: () => void;
};

const ItemCard = ({
  imageUrl,
  machineName,
  description,
  isFavorite,
  onReadMore,
  onToggleFavorite,
}: props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>

      <View style={styles.content}>
        <Text style={styles.machineName}>{machineName}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.readMoreButton} onPress={onReadMore}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={onToggleFavorite}>
            {/* <Icon
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color="red"
            /> */}
            <CustomIcon
              type={'Ionicons'}
              icon={isFavorite ? 'heart' : 'heart-outline'}
              size={25}
              color={colors.green}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;
