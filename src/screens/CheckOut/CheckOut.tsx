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

const CheckOut: React.FC<StackScreenProps<StackParameterList, 'CHECKOUT'>> = ({
  navigation,
}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [checkedDeliveryType, setCheckedDeliveryType] =
    React.useState('doorDelivery');

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Header title="Checkout" isBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.checkOutContainer}>
          <View>
            <Text style={styles.mainTitle}>Delivery</Text>
          </View>

          <TextInputWithLable
            label={'Name'}
            value={name}
            onChangeText={setName}
            placeHolder="Enter Name"
          />

          <TextInputWithLable
            label={'Address'}
            value={address}
            onChangeText={setAddress}
            placeHolder="Enter Address"
          />

          <TextInputWithLable
            label={'Contact Number'}
            value={contactNumber}
            onChangeText={setContactNumber}
            placeHolder="Enter Contact Number"
          />

          <Text style={styles.label}>Delivery</Text>

          <View>
            <CustomRadioButton
              value={'doorDelivery'}
              status={
                checkedDeliveryType === 'doorDelivery' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedDeliveryType('doorDelivery')}
              text="Door Delivery"
            />

            <CustomRadioButton
              value={'pickUp'}
              status={
                checkedDeliveryType === 'pickUp' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedDeliveryType('pickUp')}
              text="Pick Up"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>Rs. 120,000.00</Text>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('PAYMENT_METHOD' as never)}>
        <Text style={styles.submitButtonText}>Proceed To Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckOut;
