import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../constants/colors';
import {getScaleNumber} from '../../utils/refDimention';
import style from './style';

type props = {
  title?: string;
  isMenu?: boolean;
  onBackPress?: () => void;
  onPressSearch?: () => void;
  onPressSlider?: () => void;
  onPressSettings?: () => void;
  isBack?: boolean;
  isProfile?: boolean;
  titleTextStyle?: any;
  containerStyles?: any;
  iconColor?: any;
};
const Header = ({
  title,
  isMenu,
  onBackPress,
  isBack,
  isProfile,
  onPressSearch,
  onPressSlider,
  onPressSettings,
  titleTextStyle,
  containerStyles,
  iconColor,
}: props) => {
  return (
    <View style={[style.container, containerStyles]}>
      <TouchableOpacity onPress={onBackPress}>
        {isMenu && (
          <IconE
            name="menu"
            color={colors.iconBlack}
            size={getScaleNumber(30)}
          />
        )}
        {isBack && (
          <IconI
            name="chevron-back"
            color={iconColor || colors.iconBlack}
            size={getScaleNumber(30)}
          />
        )}
      </TouchableOpacity>
      <Text style={[style.titleText, titleTextStyle]}>{title}</Text>
      <View>
        {isProfile && (
          <Image
            source={require('../../assets/person.png')}
            style={{borderRadius: 100}}
          />
        )}
        <View style={{flexDirection: 'row'}}>
          {onPressSearch && (
            <TouchableOpacity
              onPress={onPressSearch}
              style={style.searchContainer}>
              <IconI
                name="search"
                color={colors.iconBlack}
                size={getScaleNumber(15)}
              />
            </TouchableOpacity>
          )}
          {onPressSlider && (
            <TouchableOpacity
              onPress={onPressSlider}
              style={style.sliderContainer}>
              <IconFA
                name="sliders"
                color={colors.iconBlack}
                size={getScaleNumber(15)}
              />
            </TouchableOpacity>
          )}

          {onPressSettings && (
            <TouchableOpacity
              onPress={onPressSettings}
              style={style.settingsContainer}>
              <IconI
                name="settings-outline"
                color={colors.iconBlack}
                size={getScaleNumber(15)}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
