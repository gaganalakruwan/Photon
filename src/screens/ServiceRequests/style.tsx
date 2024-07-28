import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    paddingBottom: 100, // Add padding to avoid overlap with the button
  },
  serviceRequestContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: colors.black,
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
    width: '65%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  radioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  radioButtonView2: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  radioText: {
    color: colors.black,
    fontWeight: '500',
  },

  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  radioButtons: {
    marginTop: 5,
    marginBottom: 10,
  },

  radioButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.iconGray,
    backgroundColor: colors.iconGray,
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 5,
  },
  radioButtonSelected: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  radioButtonText: {
    color: colors.black,
    fontWeight: '500',
  },
  radioButtonTextSelected: {
    color: colors.white,
  },

  bottomButton: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 25,
    width: '65%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
