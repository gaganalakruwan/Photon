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
import {
  CreditCardFormData,
  CreditCardInput,
} from 'react-native-credit-card-input';

const AddNewCard: React.FC<
  StackScreenProps<StackParameterList, 'ADD_NEW_CARD'>
> = ({navigation}) => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const formatCardNumber = (number: string) => {
    const cleanNumber = number.replace(/\D/g, '').slice(0, 16);
    return cleanNumber.replace(/(\d{4})(?=\d)/g, '$1 ').toUpperCase();
  };

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Header
        title="Add New Card"
        isBack={true}
        onBackPress={() => navigation.navigate('PAYMENT_METHOD')}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>
              {formatCardNumber(cardNumber) || 'xxxx xxxx xxxx xxxx'}
            </Text>
            <View style={styles.bottomRow}>
              <View style={styles.cardDetails}>
                <Text style={styles.cardLabel}>Card Holder Name</Text>
                <Text style={styles.cardValue}>
                  {cardHolderName || 'Card Holder Name'}
                </Text>
              </View>
              <View style={styles.cardDetails}>
                <Text style={styles.cardLabel}>Expiry Date</Text>
                <Text style={styles.cardValue}>{expiryDate || 'MM/YY'}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.addNewCardContainer}>
          <TextInputWithLable
            label={'Card Holder Name'}
            value={cardHolderName}
            onChangeText={setCardHolderName}
            placeHolder="Card Holder Name"
          />

          <TextInputWithLable
            label={'Card Number'}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeHolder="xxxx xxxx xxxx xxxx"
          />

          <TextInputWithLable
            label={'Expiry Date'}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeHolder="MM/YY"
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Save Card</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddNewCard;
