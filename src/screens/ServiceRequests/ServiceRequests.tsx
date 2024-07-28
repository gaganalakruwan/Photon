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
import {RadioButton} from 'react-native-paper';
import CustomRadioButton from '../../components/RadioButton/RadioButton';
import TextInputWithLable from '../../components/TextInputWithLable/TextInputWithLable';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const ServiceRequest: React.FC<
  StackScreenProps<StackParameterList, 'SERVICE_REQUESTS'>
> = ({navigation}) => {
  const [step, setStep] = useState(1); // Step state to track current step
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [machineName, setMachineName] = useState('');
  const [machineType, setMachineType] = useState('');
  const [machineModel, setMachineModel] = useState('');
  const [dateOfPurchase, setDateOfPurchase] = useState('');

  const [preferredServiceDate, setPreferredServiceDate] = useState('');
  const [machineWarranty, setMachineWarranty] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [warrantyStatus, setWarrantyStatus] = useState('');
  const [checkedWarranty, setCheckedWarranty] = React.useState('yes');
  const [checkedServiceType, setCheckedServiceType] = React.useState('repair');
  const [checkedWarrantyStatus, setCheckedWarrantyStatus] =
    React.useState('normal');

  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs();
  }, []);

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigation.goBack();
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.serviceRequestContainer}>
            <View>
              <Text style={styles.mainTitle}>Machine Details</Text>
            </View>

            <TextInputWithLable
              label={'Machine Name'}
              value={machineName}
              onChangeText={setMachineName}
              placeHolder="Enter Machine Name"
            />

            <TextInputWithLable
              label={'Machine Type'}
              value={machineType}
              onChangeText={setMachineType}
              placeHolder="Enter Machine Type"
            />

            <TextInputWithLable
              label={'Machine Model'}
              value={machineModel}
              onChangeText={setMachineModel}
              placeHolder="Enter Machine Model"
            />

            <TextInputWithLable
              label={'Date of Purchase'}
              value={dateOfPurchase}
              onChangeText={setDateOfPurchase}
              placeHolder="Enter Date of Purchase"
            />

            <Text style={styles.label}>Warranty</Text>

            <View>
              <CustomRadioButton
                value={'yes'}
                status={checkedWarranty === 'yes' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedWarranty('yes')}
                text="Yes"
              />

              <CustomRadioButton
                value={'no'}
                status={checkedWarranty === 'no' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedWarranty('no')}
                text="No"
              />
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.serviceRequestContainer}>
            <View>
              <Text style={styles.mainTitle}>Service Details</Text>
            </View>
            <Text style={styles.label}>Service Type</Text>

            <View style={styles.radioButtons}>
              <View style={styles.radioRow}>
                <CustomRadioButton
                  value={'repair'}
                  status={
                    checkedServiceType === 'repair' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedServiceType('repair')}
                  text="Repair"
                />
                <View style={{flex: 0.26}}></View>

                <CustomRadioButton
                  value={'calibration'}
                  status={
                    checkedServiceType === 'calibration'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() => setCheckedServiceType('calibration')}
                  text="Calibration"
                />

                <View style={{flex: 0.2}}></View>
              </View>

              <View style={styles.radioRow}>
                <CustomRadioButton
                  value={'maintenance'}
                  status={
                    checkedServiceType === 'maintenance'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() => setCheckedServiceType('maintenance')}
                  text="Maintenance"
                />

                <View style={{flex: 0.5}}></View>
                <CustomRadioButton
                  value={'partReplacement'}
                  status={
                    checkedServiceType === 'partReplacement'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() => setCheckedServiceType('partReplacement')}
                  text="Part Replacement"
                />
                <View style={{flex: 0.1}}></View>
              </View>
            </View>

            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, {height: 100}]}
              value={serviceDescription}
              onChangeText={setServiceDescription}
              placeholder="Enter Description"
              placeholderTextColor={colors.gray}
              multiline
            />

            <TextInputWithLable
              label={'Preferred Service Date'}
              value={preferredServiceDate}
              onChangeText={setPreferredServiceDate}
              placeHolder="DD/MM/YY"
            />

            <Text style={styles.label}>Warranty Status</Text>
            <View>
              <CustomRadioButton
                value={'normal'}
                status={
                  checkedWarrantyStatus === 'normal' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedWarrantyStatus('normal')}
                text="Normal"
              />

              <CustomRadioButton
                value={'urgent'}
                status={
                  checkedWarrantyStatus === 'urgent' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedWarrantyStatus('urgent')}
                text="Urgent"
              />

              <CustomRadioButton
                value={'emergency'}
                status={
                  checkedWarrantyStatus === 'emergency'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => setCheckedWarrantyStatus('emergency')}
                text="Emergency"
              />
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.serviceRequestContainer}>
            <View>
              <Text style={styles.mainTitle}>Customer Information</Text>
            </View>

            <TextInputWithLable
              label={'Name'}
              value={fullName}
              onChangeText={setFullName}
              placeHolder="Enter Name"
            />
            <TextInputWithLable
              label={'Company/Organization'}
              value={company}
              onChangeText={setCompany}
              placeHolder="Enter Company/Organization"
            />

            <TextInputWithLable
              label={'Contact Number'}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeHolder="Enter Contact Number"
            />

            <TextInputWithLable
              label={'Email Address'}
              value={email}
              onChangeText={setEmail}
              placeHolder="Enter Email Address"
              keyboardType={'email-address'}
            />

            <TextInputWithLable
              label={'Address'}
              value={address}
              onChangeText={setAddress}
              placeHolder="Address"
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Service Request" isBack={true} onBackPress={handleBack} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderStepContent()}
      </ScrollView>
      {step === 1 ? (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => setStep(2)}>
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      ) : step === 2 ? (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => setStep(3)}>
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      ) : step === 3 ? (
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default ServiceRequest;
