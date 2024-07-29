import {Text, View, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {SlideType} from '../../../../types';

interface SlideProps {
  slide: SlideType;
}

const Slide: React.FunctionComponent<SlideProps> = ({slide}) => {
  const oreantation = useDeviceOrientation();
  const [oreantationStyles, setOreantationStyles] = useState<any>({
    container: {},
  });
  useEffect(() => {
    const {width, height} = Dimensions.get('window');
    const w = width < height ? width : height;
    const h = width < height ? height : width;
    if (oreantation === 'portrait') {
      setOreantationStyles({
        container: {
          width: w,
          flexDirection: 'column',
        },
      });
    } else {
      setOreantationStyles({
        container: {
          width: h,
          flexDirection: 'row',
        },
      });
    }
  }, [oreantation]);

  return (
    <View style={[styles.container, oreantationStyles.container]}>
      <View style={[styles.imageContainer]}>
        <Image source={slide.image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.titleText}>{slide.title}</Text>
    </View>
  );
};

export default Slide;
