import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  mainImage: {
    width: 320,
    height: 320,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: colors.black,
    marginHorizontal: 30,
  },
  dashLineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  dashLine: {
    height: 5,
    backgroundColor: colors.green,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  submitButton: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 25,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginHorizontal: 20,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 18,
  },
});

export default styles;
