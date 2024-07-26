import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  rowContaianer: {
    marginTop: 3,
  },

  IconContainer: {
    position: 'absolute',
    backgroundColor: colors.iconGray,
    borderRadius: 50,
    padding: 10,
    elevation: 2,
  },

  menuContainer: {
    width: '100%',
    marginLeft: 50,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  menuItemText: {
    marginLeft: 60,
    fontSize: 16,
    marginTop: 12,
    color: colors.black,
    fontWeight: '500',
  },
});

export default styles;
