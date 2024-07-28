import {
  Image,
  LogBox,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import MenuItem from '../../components/MenuItem/MenuItem';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../constants/colors';
import {Searchbar} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const HeplCenter: React.FC<
  StackScreenProps<StackParameterList, 'HELP_CENTER'>
> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar animated={true} backgroundColor={colors.green} />
      <Header
        title="Help Center"
        isBack={true}
        onBackPress={() => navigation.navigate('PROFILE' as never)}
        containerStyles={{backgroundColor: colors.green}}
        iconColor={colors.white}
        titleTextStyle={{color: colors.white}}
      />
      <View style={styles.helpView}>
        <Text style={styles.helpText}>How Can We Help You?</Text>
        <Searchbar
          placeholder="Search...."
          onChangeText={setSearchQuery}
          value={searchQuery}
          iconColor={colors.green}
          placeholderTextColor={colors.textBlack}
          style={styles.search}
          inputStyle={{marginTop: -5}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <Text style={styles.noButtonText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.confirmButton]}>
          <Text style={styles.yesButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.helpCenterContainer}>
          <View style={styles.menuContainer}>
            <MenuItem
              type="AntDesign"
              name="customerservice"
              title="Customer Service"
              rightIconType="Feather"
              rightIconName="chevron-down"
              size={22}
            />
            <MenuItem
              type="Fontisto"
              name="world-o"
              title="Website"
              rightIconType="Feather"
              rightIconName="chevron-down"
              size={22}
            />

            <MenuItem
              type="FontAwesome"
              name="whatsapp"
              title="Whatsapp"
              rightIconType="Feather"
              rightIconName="chevron-down"
              size={22}
            />

            <MenuItem
              type="MaterialIcons"
              name="facebook"
              title="Facebook"
              rightIconType="Feather"
              rightIconName="chevron-down"
              size={22}
            />

            <MenuItem
              type="Feather"
              name="instagram"
              title="Instagram"
              rightIconType="Feather"
              rightIconName="chevron-down"
              size={22}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HeplCenter;
