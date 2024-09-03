import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import {
  endLoading,
  setSpinnerMessage,
  startLoading,
} from '../../redux/action/SpinnerAction';
import {useDispatch} from 'react-redux';
import {getCategoryListFunction} from '../../service/api';
import {setCategorieList} from '../../redux/action/loadDataActions';

const Categories: React.FC<
  StackScreenProps<StackParameterList, 'CATEGORIES'>
> = ({navigation}) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    dispatch(setSpinnerMessage('Loading Categories...'));
    dispatch(startLoading());
    try {
      const res = await getCategoryListFunction();
      const formattedCategories = res.data.map((category: any) => ({
        id: category.idtbl_category,
        name: category.name,
        image: {uri: `https://aws.erav.lk/photon/${category.image_path}`}, // replace with your actual base URL
        onPress: () => {
          if (category.idtbl_category === '1') {
            navigation.navigate('MACHINERY_LIST' as never);
          } else if (category.idtbl_category === '2') {
            navigation.navigate('SPARE_PARTS' as never);
          } else if (category.idtbl_category === '3') {
            navigation.navigate('SERVICE_REQUESTS' as never);
          } else {
            navigation.navigate('HOME' as never);
          }
        },
      }));

      if (formattedCategories.length % 2 !== 0) {
        formattedCategories.push({id: 'placeholder', name: '', image: null});
      }

      setCategories(formattedCategories);
      setCategorieList(res.data);
      dispatch(endLoading());
    } catch (error) {
      console.log(error);
      dispatch(endLoading());
    }
  };

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
