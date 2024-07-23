import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  text: {color: 'white'},
  container: {
    height: 40,
    width: '80%',
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
  },
});

export default styles;