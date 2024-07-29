import {StyleSheet} from 'react-native';
import { getScaleNumber } from '../../../utils/refDimention';
import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: getScaleNumber(5),
    paddingHorizontal: getScaleNumber(30),
    marginVertical: getScaleNumber(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: getScaleNumber(33),
    width: getScaleNumber(30),
    tintColor: colors.green,
  },
  skipButton: {
    height: getScaleNumber(33),
  },
  skipText: {
    textAlign: 'right',
    fontWeight: '500',
    fontSize: getScaleNumber(15),
    color: colors.white,
    lineHeight: getScaleNumber(26.5) /* 176.667% */,
    letterSpacing: getScaleNumber(-0.45),
    textDecorationLine: 'underline',
  },
});

export default styles;
