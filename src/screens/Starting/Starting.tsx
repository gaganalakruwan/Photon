import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import styles from './style';
import {colors} from '../../constants/colors';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const Starting: React.FC<StackScreenProps<StackParameterList, 'STARTING'>> = ({
  navigation,
}) => {
  const [step, setStep] = useState(1); // Step state to track current step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigation.goBack();
    }
  };

  const renderStepContent = () => {
    const stepImages = [
      require('../../assets/intro/intro1.png'),
      require('../../assets/intro/intro2.png'),
      require('../../assets/intro/intro3.png'),
      require('../../assets/intro/intro4.png'),
    ];

    const pageTitles = [
      'Understand your service coverage and schedules easily',
      'Your service requests and updates at your fingertips',
      'Order spare parts quickly and conveniently',
      'Efficiently manage overdue payments and reminders',
    ];

    return (
      <View style={styles.startingContainer}>
        <Image
          source={stepImages[step - 1]}
          style={styles.mainImage}
          resizeMode="contain"
        />
        <Text style={styles.mainTitle}>{pageTitles[step - 1]}</Text>
        <View style={styles.dashLineContainer}>
          {Array.from({length: 4}).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dashLine,
                {width: step === index + 1 ? '10%' : '15%'},
                index === 3 && {width: '10%'},
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <Header title="Service Request" isBack={true} onBackPress={handleBack} /> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderStepContent()}
      </ScrollView>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          if (step < 4) {
            setStep(step + 1);
          } else {
            navigation.navigate('MAIN_HOME');
          }
        }}>
        <Text style={styles.submitButtonText}>
          {step === 4 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Starting;
