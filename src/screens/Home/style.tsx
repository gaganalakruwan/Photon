import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    marginHorizontal: 5,
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 15,
    color: colors.black,
    marginHorizontal: 20,
  },

  welcomeText2: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.black,
    marginHorizontal: 20,
  },
  search: {
    height: 45,
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 15,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },

  tab: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  tabText: {
    color: colors.black,
    fontSize: 15,
    marginHorizontal: 10,
    fontWeight: '500',
  },

  tabTextFocus: {
    color: colors.green,
  },

  activeTabLine: {
    height: 4,
    alignItems: 'center',
    backgroundColor: '#008080',
    width: '85%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 1,
  },
});

export default styles;
