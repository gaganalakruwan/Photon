import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import Header from '../../components/Header/Header';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import {colors} from '../../constants/colors';

const machineImage = require('../../assets/Catagories/machine.png'); // Replace with your actual image source

const SparePartsDetails: React.FC<
  StackScreenProps<StackParameterList, 'SPARE_PARTS_DETAILS'>
> = ({navigation, route}) => {
  const {sparePartsDetails} = route.params;

  const details = {
    'Part Name': `${sparePartsDetails.part_name}`,
    'Part Number': `${sparePartsDetails.part_no}`,
    'Price (Rs.)': `${sparePartsDetails.price}`,
    Description: `${sparePartsDetails.comment}`,
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        isBack
        title={sparePartsDetails.part_name}
        onBackPress={() => navigation.navigate('SPARE_PARTS' as never)}
      />
      <ScrollView>
        <View style={styles.outerContainer}>
          <TouchableOpacity style={styles.favoriteButton}>
            <CustomIcon
              type={'Ionicons'}
              icon="heart-outline"
              size={22}
              color={colors.green}
            />
          </TouchableOpacity>
          <View style={styles.innerContainer}>
            <Image source={machineImage} style={styles.image} />
            <View style={styles.imageOverlay}>
              <View style={styles.warrantyContainer}>
                <View style={styles.iconContainer}>
                  <CustomIcon
                    type="FontAwesome5"
                    icon="award"
                    size={18}
                    color={colors.green}
                  />
                </View>

                <Text style={styles.warrantyText}>5 Year Warranty</Text>
              </View>
            </View>
          </View>
          <Text style={styles.machineName}>{sparePartsDetails.part_name}</Text>
        </View>

        <View style={styles.detailsContainer}>
          {Object.keys(details).map(key => (
            <View key={key} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{key}</Text>
              <Text style={styles.detailValue}>{details[key]}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SparePartsDetails;
