import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import TextInputWithLable from '../../components/TextInputWithLable/TextInputWithLable';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import CustomRadioButton from '../../components/RadioButton/RadioButton';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import {colors} from '../../constants/colors';
import ItemCard2 from '../../components/ItemCard2.tsx/ItemCard2';

const Payment: React.FC<StackScreenProps<StackParameterList, 'PAYMENT'>> = ({
  navigation,
}) => {
  const details = {
    Name: 'Desitha Wijesena',
    Address: '366/6, Galle Road, Kalutara North',
    'Contact Number': '0765524568',
    Delivery: 'Pick Up',
  };

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Header
        title="Payment"
        isBack={true}
        onBackPress={() => navigation.navigate('PAYMENT_METHOD')}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <ItemCard2
            imageUrl={
              'https://static.chinaricemill.com/cloud/knBqlKRlkSjrirqlljr/MLGQ51C-2-Double-Body-Rice-Huller.jpg'
            }
            machineName={'Smart 200'}
            price={'Rs.120,000.00'}
          />
        </View>
        <View style={styles.detailsContainer}>
          {Object.keys(details).map(key => (
            <View key={key} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{key}</Text>
              <Text style={styles.detailValue}>{details[key]}</Text>
            </View>
          ))}
        </View>
        <View style={styles.line}></View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount</Text>
            <Text style={styles.detailValue}>Rs. 120,000.00</Text>
          </View>

          <View style={styles.detailRow2}>
            <Text style={styles.detailLabel}>Total</Text>
            <Text style={styles.detailValue}>Rs. 120,000.00</Text>
          </View>
        </View>

        <View style={styles.line}></View>
        <View style={styles.detailsContainer2}>
          <View style={styles.detailRow2}>
            <Text style={styles.detailLabel}>Payment Method</Text>
            <View style={styles.method}>
              <Text style={styles.detailValue2}>Card</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('PAYMENT_METHOD')}>
                <Text style={styles.detailValue3}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Payment;
