import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import {FlatList} from 'react-native';
import ItemCard from '../../components/ItemCard/ItemCard';
import styles from './style';

const NewProducts = () => {
  const machines = [
    {
      id: 1,
      imageUrl:
        'https://image.made-in-china.com/2f0j00wbYWlNrfYhzG/Rice-Silky-Machine-in-Rice-Mill-Machine-Rice-Polishing-Machine-Rice-Polisher-Water-Mist-Polisher.jpg',

      machineName: 'PACKAGING MACHINES ',
      description: 'Description of Machine 1  ',
    },
    {
      id: 2,
      imageUrl:
        'https://static.chinaricemill.com/cloud/knBqlKRlkSjrirqlljr/MLGQ51C-2-Double-Body-Rice-Huller.jpg',
      machineName: 'I - Polisher',
      description: 'Description of Machine 2',
    },
    {
      id: 3,
      imageUrl:
        'https://www.richipelletmachine.com/wp-content/uploads/2023/05/MZLH350-grass-pellets-machine-for-sale.jpg',
      machineName: 'PELLETING MACHINE',
      description: 'Description of Machine 3',
    },
  ];

  const navigation = useNavigation();

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

export default NewProducts;
