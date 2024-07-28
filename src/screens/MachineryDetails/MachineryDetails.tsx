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

const MachineDetails: React.FC<
  StackScreenProps<StackParameterList, 'MACHINE_DETAILS'>
> = ({navigation}) => {
  const details = {
    Model: 'Smart 200',
    Brand: 'PHOTON',
    'Ejector Valves': '32',
    Compressor: '1KW   Piston Compressor',
    Voltage: '110/220V   ~50/60HZ',
    Capacity: '150-250  kg/h',
    'Power(KW)': '0.3KW',
    'Weight(Kg)': '70',
    'Size(L× W ×H mm)': '712*314*847mm',
    Cameras: '2',
    Applications: 'Beans, Rice',

    // Add more details as needed
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        isBack
        title="Smart 200"
        onBackPress={() => navigation.navigate('MACHINERY_LIST' as never)}
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
          <Text style={styles.machineName}>Smart 200</Text>
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

export default MachineDetails;
