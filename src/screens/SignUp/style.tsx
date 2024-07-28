import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },

  passwordIcon: {
    position: 'absolute',
    right: 10,
    top: 65,
  },
});

export default styles;
