import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  addNewCardContainer: {
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

  scrollContainer: {
    paddingBottom: 80, // Add padding to avoid overlap with the button
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 120,
  },

  total: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.black,
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

  cardContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    width: '85%',
    alignSelf: 'center',
    padding: 50,
    borderRadius: 15,
    backgroundColor: colors.green,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    position: 'relative',
  },
  cardNumber: {
    fontSize: 25,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 40,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  cardDetails: {
    flexDirection: 'column',
  },
  cardLabel: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '500',
  },
  cardValue: {
    fontSize: 16,
    color: colors.white,
    marginTop: 5,
    fontWeight: '700',
  },
});

export default styles;
