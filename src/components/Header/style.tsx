import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {getScaleNumber} from '../../utils/refDimention';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  titleText: {
    color: colors.textBlack,
    fontWeight: '600',
    fontSize: 24,
  },
  searchContainer: {
    backgroundColor: colors.iconGray,
    borderRadius: 100,
    width: getScaleNumber(22),
    height: getScaleNumber(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    backgroundColor: colors.iconGray,
    borderRadius: 100,
    width: getScaleNumber(22),
    height: getScaleNumber(22),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },

  settingsContainer: {
    backgroundColor: colors.iconGray,
    borderRadius: 100,
    width: getScaleNumber(22),
    height: getScaleNumber(22),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});
