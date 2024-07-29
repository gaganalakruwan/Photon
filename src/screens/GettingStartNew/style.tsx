import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
  safeAreaView: {backgroundColor: colors.white},
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  slideContainer: {
    flex: 1,
    // width: '100%',
  },
});
