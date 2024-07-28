import React from 'react';
import {FlatList, View} from 'react-native';
import IconButton from '../../components/IconButton/IconButton';
import styles from './style';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const machineryImage = require('../../assets/machinery.png');
const servicesImage = require('../../assets/services.png');
const sparePartsImage = require('../../assets/spare-parts.png');

const Categories = () => {
  const categories = [
    {
      id: '1',
      name: 'Machinery',
      image: require('../../assets/Catagories/machine.png'),
    },
    {
      id: '2',
      name: 'Services',
      image: require('../../assets/services.png'),
    },

    {
      id: '3',
      name: 'Spare Parts',
      image: require('../../assets/Catagories/spare.png'),
    },
  ];

  if (categories.length % 2 !== 0) {
    categories.push({id: 'placeholder', name: '', image: null});
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) =>
          item.image ? (
            <CategoryCard imageUrl={item.image} category={item.name} />
          ) : (
            <View style={styles.placeholder} />
          )
        }
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Categories;
