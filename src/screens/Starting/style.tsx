// styles.tsx
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  linesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  shortLine: {
    width: 20,
    height: 2,
    backgroundColor: '#008CBA',
    marginHorizontal: 5,
  },
  longLine: {
    width: 40,
    height: 2,
    backgroundColor: '#008CBA',
    marginHorizontal: 5,
  },
  actionButton: {
    alignSelf: 'center',
    marginTop: 50,
  },
  imageContainer: {
    width: width * 0.6,
    height: height * 0.3,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
