import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  helpCenterContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  menuContainer: {
    width: '100%',
    marginLeft: 15,
  },

  helpView: {
    backgroundColor: colors.green,
  },

  helpText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
    color: colors.iconGray,
  },

  search: {
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    marginBottom: 20,
    height: 45,
    backgroundColor: colors.white,
    color: colors.iconBlack,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    maxWidth: 170,
  },
  cancelButton: {
    backgroundColor: colors.iconGray,
    borderRadius: 20,
    marginLeft: 20,
  },
  confirmButton: {
    backgroundColor: colors.green,
    borderRadius: 20,
    marginRight: 20,
  },
  noButtonText: {
    color: colors.green,
    fontSize: 16,
    fontWeight: '600',
  },

  yesButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
