import {Animated, Dimensions, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import IconA from 'react-native-vector-icons/Entypo';
import {useDeviceOrientation} from '@react-native-community/hooks';
import { colors } from '../../../constants/colors';
import { getScaleNumber } from '../../../utils/refDimention';
import { SlideListType, SlideType } from '../../../../types';

const dimentions = Dimensions.get('window');

interface PaginationProps {
  data: SlideListType;
  scrollX: any;
  onPrevPress: () => void;
  onNextPress: () => void;
  prevButtonDisabled?: boolean;
  nextButtonDisabled?: boolean;
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
  data,
  scrollX,
  onPrevPress,
  onNextPress,
  prevButtonDisabled = false,
  nextButtonDisabled = false,
}) => {
  const orientation = useDeviceOrientation();
  const [w, setW] = useState<number>(dimentions.width);

  useEffect(() => {
    const {width, height} = Dimensions.get('window');
    if (orientation === 'portrait') {
      setW(width < height ? width : height);
    } else {
      setW(width > height ? width : height);
    }
  }, [orientation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonLeft}
        onPress={onPrevPress}
        disabled={prevButtonDisabled}>
        <IconA
          name={'chevron-left'}
          size={getScaleNumber(30)}
          color={colors.white}
          style={[
            styles.iconStyle,
            {
              color: prevButtonDisabled
                ? colors.iconGray
                : colors.black,
            },
          ]}
        />
      </TouchableOpacity>
      {data.map((item: SlideType, index: number) => {
        const inputRange = [(index - 1) * w, (index + 1) * w];
        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            colors.iconGray,
            colors.green
          ],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                backgroundColor: dotColor,
                width: getScaleNumber((w / data.length) * 0.45),
              },
            ]}
            key={item.id}
          />
        );
      })}
      <TouchableOpacity
        style={styles.buttonRight}
        onPress={onNextPress}
        disabled={nextButtonDisabled}>
        <IconA
          name={'chevron-right'}
          size={getScaleNumber(30)}
          color={colors.black}
          style={[
            styles.iconStyle,
            {
              color: nextButtonDisabled
                ? colors.iconGray
                : colors.black,
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
