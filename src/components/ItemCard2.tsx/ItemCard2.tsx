import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CustomIcon from '../CustomIcon/CustomIcon';
import {colors} from '../../constants/colors';

type props = {
  imageUrl: string;
  machineName: string;
  price: string;
  OnPressDelete?: () => void;
};

const ItemCard2 = ({imageUrl, machineName, price, OnPressDelete}: props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>

      <View style={styles.content}>
        <Text style={styles.machineName}>{machineName}</Text>

        <View style={styles.footer}>
          <View style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>{price}</Text>
          </View>
          <TouchableOpacity style={styles.favoriteIcon} onPress={OnPressDelete}>
            <CustomIcon
              type={'FontAwesome'}
              icon={'trash-o'}
              size={25}
              color={colors.green}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemCard2;
