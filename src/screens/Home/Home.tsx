import React, {useState} from 'react';
import InputText from '../../components/InputText/InputText';

import {Alert, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import ActionButton from '../../components/ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';
import navigation from '../../navigation/navigation';

const Home = () => {
  return (
    <View>
      <Text style={{color:'black'}}>Home ME </Text>
      {/* <ActionButton
          title={'Login'}
          onPress={() => navigation.navigate('SIGNUP' as never)}
          containerStyle={{alignSelf: 'center',marginTop:50}}
        /> */}
    </View>
  )
}

export default Home

