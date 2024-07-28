import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  hi: {
    flex: 1,
  },
  flatListView: {
    marginBottom: 80,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 10,
    marginLeft: 12,
  },

  tab: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  tabText: {
    color: colors.black,
    fontSize: 15,
    marginHorizontal: 20,
    fontWeight: '500',
  },

  tabTextFocus: {
    color: colors.green,
  },

  activeTabLine: {
    height: 4,
    alignItems: 'center',
    backgroundColor: '#008080',
    width: '70%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 1,
  },
});

export default styles;
