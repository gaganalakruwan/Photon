import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const getScaleNumber = (size: number) => {
  // return the dpi
  const dimesion = Math.min(SCREEN_HEIGHT, SCREEN_WIDTH);
  const dpi = Math.round(dimesion / 375);
  if (dpi >= 2) {
    return (size * dpi) / 4 + size;
  }
  return size;
};

export {getScaleNumber, SCREEN_HEIGHT, SCREEN_WIDTH};
