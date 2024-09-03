import {StyleSheet} from 'react-native';
import {getScaleNumber} from '../../utils/refDimention';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // opacity: 0.3,
  },
  loaderContent: {
    backgroundColor: 'black',
    opacity: 0.5,
    padding: getScaleNumber(20),
    borderRadius: getScaleNumber(10),
  },
  textContent: {
    paddingHorizontal: getScaleNumber(20),
    fontSize: 20,
    fontWeight: '700',
    height: 50,
    top: 20,
    color: 'white',
    zIndex: 100,
    textAlign: 'center',
  },
});
