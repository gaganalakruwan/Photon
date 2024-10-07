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
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './style';
import ItemCard from '../../components/ItemCard/ItemCard';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import {useDispatch} from 'react-redux';
import {
  endLoading,
  setSpinnerMessage,
  startLoading,
} from '../../redux/action/SpinnerAction';
import {getProductListFunction} from '../../service/api';
import {setProductList} from '../../redux/action/loadDataActions';
const Tab = createMaterialTopTabNavigator();

const SparePartsTypes: React.FC<
  StackScreenProps<StackParameterList, 'SPARE_PARTS_TYPES'>
> = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs();
  }, []);

  const dispatch = useDispatch();
  const [spareParts, setSpareParts] = useState([]);

  useEffect(() => {
    getAllMachineries();
  }, []);

  const getAllMachineries = async () => {
    dispatch(setSpinnerMessage('Loading Machineries...'));
    dispatch(startLoading());
    var data = new FormData();
    data.append('recordID', '2');
    getProductListFunction(data)
      .then(res => {
        console.log("......>>>>",res?.data);
        dispatch(setProductList(res.data));
        setSpareParts(res.data); // Set the machine data from the API response
        dispatch(endLoading());
      })
      .catch(error => {
        console.log(".....",error);
        dispatch(endLoading());
      });
  };

  const handleReadMore = sparePartsDetails => {
    navigation.navigate('SPARE_PARTS_DETAILS', {sparePartsDetails});
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.flatListView}>
        <FlatList
          data={spareParts}
          keyExtractor={item => item.idtbl_spareparts}
          renderItem={({item}) => (
            <ItemCard
              imageUrl={`https://aws.erav.lk/photon/${item.image_path}`}
              machineName={item.part_name}
              description={item.comment}
              onReadMore={() => handleReadMore(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SparePartsTypes;
