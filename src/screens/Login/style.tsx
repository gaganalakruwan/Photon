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

  socialLoginContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  socialLoginText: {
    fontSize: 15,
    marginBottom: 10,
    color: colors.darkGray,
    fontWeight: '500',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },

  iconContainer: {
    padding: 8,
    backgroundColor: colors.iconGray,
    borderRadius: 100,
  },

  passwordIcon: {
    position: 'absolute',
    right: 10,
    top: 65,
  },

  forgotPasscodeView: {
    alignSelf: 'flex-start',
    marginTop: 15,
  },

  forgotPasscodeText: {
    color: colors.green,
    fontWeight: '800',
  },
});

export default styles;
