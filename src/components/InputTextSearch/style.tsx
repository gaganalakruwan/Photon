import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.searchBack,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    height:40,
  },
  input: {
    fontSize: 14,
    borderBottomColor: '#333',
  },
});

export default styles;
