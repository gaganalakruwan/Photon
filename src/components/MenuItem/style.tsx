import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 1,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    position: 'absolute',
    backgroundColor: colors.iconGray,
    borderRadius: 50,
    padding: 10,
  },

  menuItemText: {
    marginLeft: 60,
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
  },

  rightIcon: {
    marginRight: 20,
  },
});

export default styles;
