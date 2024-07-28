import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatListContent: {
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  placeholder: {
    flex: 1,
    margin: 8,
  },
});
