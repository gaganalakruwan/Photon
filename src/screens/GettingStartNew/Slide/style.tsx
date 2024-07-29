import {StyleSheet} from 'react-native';
import { getScaleNumber } from '../../../utils/refDimention';

const styles = StyleSheet.create({
  container: {},
  titleText: {
    margin: getScaleNumber(30),
    color: '#000000',
    fontSize: getScaleNumber(24),
    fontWeight: '500',
    lineHeight: getScaleNumber(26.5) /* 110.417% */,
    letterSpacing: getScaleNumber(-0.72),
    width: getScaleNumber(250),
    alignSelf:'center'
  },
  imageContainer: {
    flex: 0.8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor:'red'
  },
  image: {height: '80%', width: '80%'},
});

export default styles;
