import {StyleSheet} from 'react-native';
import { getScaleNumber } from '../../../utils/refDimention';
import { colors } from '../../../constants/colors';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: getScaleNumber(30),
    paddingBottom: getScaleNumber(10),
    paddingTop: getScaleNumber(20),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: getScaleNumber(40),
    height: getScaleNumber(8),
    margin: 2,
    backgroundColor: colors.green,
  },
  iconStyle: {
    paddingHorizontal: getScaleNumber(5),
  },
  buttonLeft: {
    marginRight: getScaleNumber(28),
  },
  buttonRight: {
    marginLeft: getScaleNumber(28),
  },
});

export default styles;
