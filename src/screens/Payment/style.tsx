import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  paymentMethodContainer: {
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

  scrollContainer: {
    paddingBottom: 20, // Add padding to avoid overlap with the button
  },

  submitButton: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 25,
    width: '65%',
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
  detailsContainer: {
    marginVertical: 20,
    flexDirection: 'column',
    paddingLeft: 35,
    paddingRight: 35,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.blue,
    flex: 1,
  },
  detailValue: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },

  line: {
    borderWidth: 1,
    borderColor: colors.blue,
    width: '92%',
    alignSelf: 'center',
  },

  detailRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginTop: 25,
  },

  detailsContainer2: {
    flexDirection: 'column',
    paddingLeft: 35,
    paddingRight: 35,
  },

  method: {
    flexDirection: 'row',
  },
  detailValue2: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginRight: 15,
    textAlign: 'right',
  },

  detailValue3: {
    fontSize: 15,
    color: colors.blue,
    fontWeight: '400',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
});

export default styles;
