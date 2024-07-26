import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  settingsContainer: {
    alignItems: 'center',
  },

  menuContainer: {
    width: '100%',
    marginLeft: 15,
  },
});

export default styles;
