import React from 'react';
import {View} from 'react-native';
import IconButton from '../../components/IconButton/IconButton';
import styles from './style';

const machineryImage = require('../../assets/machinery.png');
const servicesImage = require('../../assets/services.png');
const sparePartsImage = require('../../assets/spare-parts.png');

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
        <IconButton
          image={machineryImage}
          label="Machinery"
          onPress={() => console.log('Machinery Pressed')}
        />
        <IconButton
          image={servicesImage}
          label="Services"
          onPress={() => console.log('Services Pressed')}
        />
      </View>
      <IconButton
        image={sparePartsImage}
        label="Spare Parts"
        onPress={() => console.log('Spare Parts Pressed')}
      />
    </View>
  );
};

export default Categories;
