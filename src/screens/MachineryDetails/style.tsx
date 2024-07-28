import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  outerContainer: {
    backgroundColor: colors.iconGray,
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 30,
    paddingBottom: 20,
    borderRadius: 15,
    position: 'relative',
    marginTop: 20,
    width: '85%',
    alignSelf: 'center',
  },
  innerContainer: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  imageOverlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  machineName: {
    marginTop: 20,
    width: '140%',
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.green,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
  },
  warrantyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.green,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    marginLeft: -73,
    marginTop: -7,
    borderRadius: 20,
  },

  iconContainer: {
    backgroundColor: colors.iconGray,
    borderRadius: 100,
    padding: 5,
  },
  warrantyText: {
    width: 80,
    marginLeft: 4,
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  },
  favoriteButton: {
    position: 'absolute',
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 100,
    top: 30,
    right: 24,
    zIndex: 1,
  },
  detailsContainer: {
    marginVertical: 20,
    flexDirection: 'column',
    paddingLeft: 35,
    paddingRight: 25,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
  },
  detailValue: {
    fontSize: 15,
    color: 'black',
    flex: 1,
    textAlign: 'left',
  },
  orderButton: {
    backgroundColor: colors.green,
    width: '60%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
