import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
    margin: 12,
    backgroundColor: colors.iconGray,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '90%',
    alignSelf: 'center',
  },

  imageContainer: {
    backgroundColor: colors.white,
    borderRadius: 80,
    width: 130,
    height: 130,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  image: {
    width: 105,
    height: 105,
    backgroundColor: 'none',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  machineName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.green,
  },
  description: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  readMoreButton: {
    padding: 7,
    width: 120,
    backgroundColor: colors.green,
    borderRadius: 20,
  },
  readMoreText: {
    color: 'white',
    textAlign: 'center',
  },
  favoriteIcon: {
    marginLeft: 10,
    backgroundColor: colors.white,
    padding: 3,
    borderRadius: 100,
  },
});

export default styles;
