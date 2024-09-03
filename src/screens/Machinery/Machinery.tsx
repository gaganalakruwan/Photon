import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import ItemCard from '../../components/ItemCard/ItemCard';
import styles from './style';
import {useDispatch} from 'react-redux';
import {
  endLoading,
  setSpinnerMessage,
  startLoading,
} from '../../redux/action/SpinnerAction';
import {getProductListFunction} from '../../service/api';
import {setProductList} from '../../redux/action/loadDataActions';
import {StackParameterList} from '../../navigation/type';
import {StackScreenProps} from '@react-navigation/stack';

const Machinery: React.FC<
  StackScreenProps<StackParameterList, 'MACHINERY_LIST'>
> = ({navigation}) => {
  const dispatch = useDispatch();

  const [machines, setMachines] = useState([]);

  useEffect(() => {
    getAllMachineries();
  }, []);

  const getAllMachineries = async () => {
    dispatch(setSpinnerMessage('Loading Machineries...'));
    dispatch(startLoading());
    var data = new FormData();
    data.append('recordID', '1');
    getProductListFunction(data)
      .then(res => {
        dispatch(setProductList(res.data));
        setMachines(res.data); // Set the machine data from the API response
        dispatch(endLoading());
      })
      .catch(error => {
        console.log(error);
        dispatch(endLoading());
      });
  };

  const handleReadMore = machineDetails => {
    navigation.navigate('MACHINE_DETAILS', {machineDetails});
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.flatListView}>
        <FlatList
          data={machines}
          keyExtractor={item => item.idtbl_machinery}
          renderItem={({item}) => (
            <ItemCard
              imageUrl={`https://aws.erav.lk/photon/${item.image_path}`}
              machineName={item.model}
              description={item.compressor}
              onReadMore={() => handleReadMore(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Machinery;
