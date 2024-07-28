import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import styles from './style';
import {colors} from '../../constants/colors';

const ServiceRequest = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Service Request" isBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.serviceRequestContainer}>
          <View>
            <Text style={styles.mainTilte}>Customer Information</Text>
          </View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter Name"
            placeholderTextColor={colors.gray}
          />
          <Text style={styles.label}>Company/Organization</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter Company"
            placeholderTextColor={colors.gray}
          />
          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholder="Enter Contact Number"
            placeholderTextColor={colors.gray}
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter Email Address"
            placeholderTextColor={colors.gray}
          />
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter Address"
            placeholderTextColor={colors.gray}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ServiceRequest;
