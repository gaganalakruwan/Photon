import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import { SlideListType } from '../../../../types';

interface HeaderProps {
  onPressSkip: () => void;
  slides: SlideListType;
  index: number;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  onPressSkip,
  slides,
  index,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={onPressSkip}>
        <Text style={styles.skipText}>
          {index < slides.length ? 'Skip' : 'Done'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
