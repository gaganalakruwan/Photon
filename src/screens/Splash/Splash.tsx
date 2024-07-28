import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import styles from './style'; // Import styles from style.tsx
import {colors} from '../../constants/colors';

const Splash: React.FC<StackScreenProps<StackParameterList, 'SPLASH'>> = ({
  navigation,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('MAIN_AUTH');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.iconGray}
        barStyle="dark-content"
      />
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo2.png')} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
