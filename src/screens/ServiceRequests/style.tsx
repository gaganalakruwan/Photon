import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    paddingBottom: 100,
  },

  mainTilte: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkGray,
    marginBottom: 25,
  },

  serviceRequestContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.black,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: colors.iconGray,
    backgroundColor: colors.iconGray,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    color: colors.black,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 25,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
