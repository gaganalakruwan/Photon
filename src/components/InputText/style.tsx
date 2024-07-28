import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    color: colors.darkGray,
    fontWeight: '600',
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
});

export default styles;
