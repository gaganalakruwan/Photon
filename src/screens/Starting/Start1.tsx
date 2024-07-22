// App.js (or StartingPage.js)
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './style';  
import ActionButton from '../../components/ActionButton/ActionButton';  

type RootStackParamList = {
  StartingPage: undefined;
  Screen2: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'StartingPage'>;

const StartingPage: React.FC<Props> = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('Screen2'); 
    }
  };

  const getLineStyle = (page: number) => {
    return currentPage === page ? styles.shortLine : styles.longLine;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/intro/intro1.jpg')} style={styles.image} />
      </View>
      <Text style={styles.heading}>Understand your service coverage and schedules easily</Text>
      <View style={styles.linesContainer}>
        <View style={getLineStyle(1)} />
        <View style={getLineStyle(2)} />
        <View style={getLineStyle(3)} />
        <View style={getLineStyle(4)} />
      </View>
      <ActionButton
        title={'Next'}
        onPress={handleNext}
        containerStyle={styles.actionButton}
      />
    </View>
  );
};

export default StartingPage;
