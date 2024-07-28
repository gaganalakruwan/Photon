import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 25,
    overflow: 'visible', // Allow content to overflow the container
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    minHeight: 190,
    shadowRadius: 2,
    elevation: 2,
    borderColor: colors.green,
    borderWidth: 1,
    alignItems: 'center', // Center the content inside the card
    marginTop: 15,
    marginBottom: 25,
  },
  imageContainer: {
    height: 180,
    width: '100%',
    position: 'relative', // Position relative to allow overflow
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
    transform: [{rotateY: '-15deg'}], // Apply 3D transformation
    position: 'absolute', // Position absolute to overflow
    top: -35, // Adjust to make the image overflow the card
    // Adjust to make the image overflow the card
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    alignSelf: 'center',
    elevation: 10,
  },
  categoryName: {
    padding: 10,
    marginTop: -35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 18,
  },
});

export default styles;
