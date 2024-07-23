// App.js (or StartingPage.js)
import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './style';  
import ActionButton from '../../components/ActionButton/ActionButton';  

type RootStackParamList = {
  StartingPage: undefined;
  Screen2: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'StartingPage'>;

const StartingPage3: React.FC<Props> = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else {
     // navigation.navigate('Screen3'); 
    }
  };

  const getLineStyle = (page: number) => {
    return currentPage === page ? styles.shortLine : styles.longLine;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/intro/intro3.png')} style={styles.image} />
      </View>
      <Text style={styles.text}>Order spare parts quickly and conveniently</Text>
      <SafeAreaView style={{flex: 0.05}}></SafeAreaView>
      <View style={styles.linesContainer}>
        <View style={getLineStyle(1)} />
        <View style={getLineStyle(2)} />
        <View style={getLineStyle(3)} />
        <View style={getLineStyle(4)} />
      </View>
      <SafeAreaView style={{flex: 0.7}}></SafeAreaView>
      <ActionButton
        title={'Next'}
        onPress={() => navigation.navigate('START4' as never)} 
      />
    </View>
  );
};

export default StartingPage3;
