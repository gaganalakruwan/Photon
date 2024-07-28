import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import {FlatList} from 'react-native';
import ItemCard from '../../components/ItemCard/ItemCard';
import styles from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const Machinery: React.FC<
  StackScreenProps<StackParameterList, 'MACHINERY'>
> = ({navigation}) => {
  const machines = [
    {
      id: 1,
      imageUrl:
        'https://ntc.lk/uploads/all/UgjlnojPPwATpVagIt04oO2bwZ8rhV6MiP1Zxte8.jpeg',

      machineName: 'Smart 200',
      description: '1KW Piston Compressor',
    },
    {
      id: 2,
      imageUrl:
        'https://sc04.alicdn.com/kf/H0f013a28765847c395c8daec2f8231f3V.jpg',
      machineName: 'Smart 500',
      description: '3.5KW Compressor',
    },
    {
      id: 3,
      imageUrl:
        'https://s.alicdn.com/@sc04/kf/H8fb2b894048843dfa3b4479f69d73e90D.jpg_720x720q50.jpg',
      machineName: '1R-64',
      description: '5.5KW Piston Compressor',
    },

    {
      id: 4,
      imageUrl:
        'https://s.alicdn.com/@sc04/kf/HTB1tdY0bozrK1RjSspmq6AOdFXas.jpg_720x720q50.jpg',
      machineName: '2R-96',
      description: '7.5KW Screw-type Compressor',
    },

    {
      id: 5,
      imageUrl:
        'https://image.made-in-china.com/202f0j00kSwhqGeEYRgY/Multi-Function-Mini-CCD-Color-Sorter-for-Rice-Mill-Machines.webp',
      machineName: '2R-128',
      description: '7.5KW Screw-type Compressor',
    },
  ];

  const handleReadMore = () => {
    // Readmore logic
  };

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

export default Machinery;
