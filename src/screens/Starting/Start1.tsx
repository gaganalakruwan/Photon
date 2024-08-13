import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../../components/ActionButton/ActionButton';  
import styles from './stylee'; // Assuming your style file is style.css

const images = [
  { id: 1, source: require('../../assets/intro/intro1.png'), text: 'Understand your service coverage and schedules easily' },
  { id: 2, source: require('../../assets/intro/intro2.png'), text: 'Your service requests and updates at your fingertips' },
  { id: 3, source: require('../../assets/intro/intro3.png'), text: 'Order spare parts quickly and conveniently' },
  { id: 4, source: require('../../assets/intro/intro4.png'), text: 'Efficiently manage overdue payments and reminders' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('MAIN_HOME' as never);
    }
  };
 
  return (
    <View style={styles.container}>
      <Image source={images[currentIndex].source} style={styles.image} />
      <Text style={styles.text}>{images[currentIndex].text}</Text>
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.indicatorActive,
            ]}
          />
        ))}
     </View>
     <SafeAreaView style={{flex: 0.7}}></SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentIndex === images.length - 1 ? 'Next' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Carousel;
