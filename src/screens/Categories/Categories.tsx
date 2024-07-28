import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const Categories: React.FC<
  StackScreenProps<StackParameterList, 'CATEGORIES'>
> = ({navigation}) => {
  const categories = [
    {
      id: '1',
      name: 'Machinery',
      image: require('../../assets/Catagories/machine.png'),
      onPress: () => navigation.navigate('MACHINERY_LIST' as never),
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
      onPress: () => navigation.navigate('SPARE_PARTS' as never),
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
            <CategoryCard
              imageUrl={item.image}
              category={item.name}
              onPress={item.onPress}
            />
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
