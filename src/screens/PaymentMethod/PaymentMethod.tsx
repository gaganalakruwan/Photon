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

const PaymentMethod: React.FC<
  StackScreenProps<StackParameterList, 'PAYMENT_METHOD'>
> = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [checkedDeliveryType, setCheckedDeliveryType] =
    React.useState('doorDelivery');

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Header
        title="Payment Method"
        isBack={true}
        onBackPress={() => navigation.navigate('CHECKOUT')}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.paymentMethodContainer}>
          <View>
            <Text style={styles.mainTitle}>Credit & Debit Card</Text>
          </View>

          <TouchableOpacity
            style={styles.submitButton2}
            onPress={() => navigation.navigate('ADD_NEW_CARD')}>
            <CustomIcon
              type={'FontAwesome'}
              icon={'credit-card'}
              size={22}
              color={colors.green}
              style={styles.buttonIcon}
            />
            <Text style={styles.submitButtonText2}>Add New Card</Text>
          </TouchableOpacity>

          <View style={styles.cardNumber}>
            <Text style={styles.cardNumberText}>#### #### 1457</Text>
          </View>

          <View>
            <Text style={styles.mainTitle}>More Payment Options</Text>
          </View>

          <TouchableOpacity style={styles.submitButton2}>
            <CustomIcon
              type={'Ionicons'}
              icon={'cash-outline'}
              size={22}
              color={colors.green}
              style={styles.buttonIcon}
            />
            <Text style={styles.submitButtonText2}>Cash</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton3}>
            <CustomIcon
              type={'FontAwesome'}
              icon={'google'}
              size={22}
              color={colors.green}
              style={styles.buttonIcon}
            />
            <Text style={styles.submitButtonText2}>Google Pay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>Rs. 120,000.00</Text>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('PAYMENT')}>
        <Text style={styles.submitButtonText}>Proceed To Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentMethod;
