import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    alignSelf: 'center',
    marginTop: 5,
  },

  name: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    color: colors.black,
  },

  profileContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: -2,
    backgroundColor: colors.green,
    borderRadius: 50,
    padding: 7,
    elevation: 5,
  },

  menuContainer: {
    width: '100%',
    marginLeft: 45,
  },
});

export default styles;
