import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E2F2E9',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
    backgroundColor: '#E2F2E9',
  },
  logo: {
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: '#E2F2E9',
  },
  tabContentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 250,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 40, // Add margin to space out the tabs
  },
  tabText: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  activeTabLine: {
    height: 3,
    alignItems: 'center',
    backgroundColor: '#008080', // Use a color that matches your design
    width: '100%',
    position: 'absolute',
    bottom: 1,
  },
});

export default styles;
