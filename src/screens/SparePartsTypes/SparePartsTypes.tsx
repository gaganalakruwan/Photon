import {
  FlatList,
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import MenuItem from '../../components/MenuItem/MenuItem';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../constants/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './style';
import ItemCard from '../../components/ItemCard/ItemCard';
import {Animated} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const Tab = createMaterialTopTabNavigator();

const SparePartsTypes: React.FC<
  StackScreenProps<StackParameterList, 'SPARE_PARTS_TYPES'>
> = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs();
  }, []);

  const handleReadMore = () => {
    // Readmore logic
  };

  const machines = [
    {
      id: 1,
      imageUrl:
        'https://image.made-in-china.com/2f0j00wbYWlNrfYhzG/Rice-Silky-Machine-in-Rice-Mill-Machine-Rice-Polishing-Machine-Rice-Polisher-Water-Mist-Polisher.jpg',

      machineName: 'Spare Part 01',
      description: 'Description',
    },
    {
      id: 2,
      imageUrl:
        'https://static.chinaricemill.com/cloud/knBqlKRlkSjrirqlljr/MLGQ51C-2-Double-Body-Rice-Huller.jpg',
      machineName: 'Spare Part 02',
      description: 'Description',
    },
    {
      id: 3,
      imageUrl:
        'https://www.richipelletmachine.com/wp-content/uploads/2023/05/MZLH350-grass-pellets-machine-for-sale.jpg',
      machineName: 'Spare Part 03',
      description: 'Description',
    },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.flatListView}>
        <FlatList
          data={machines}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemCard
              imageUrl={item.imageUrl}
              machineName={item.machineName}
              description={item.description}
              onReadMore={handleReadMore}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SparePartsTypes;
