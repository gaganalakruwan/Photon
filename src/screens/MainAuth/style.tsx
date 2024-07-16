import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E2F2E9',
  },
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
    backgroundColor: '#E2F2E9',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    backgroundColor:'#E2F2E9'
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
    marginHorizontal: 20, // Add margin to space out the tabs
  },
  tabText: {
    color: 'black',
    fontSize: 30,
    marginHorizontal:20
  },
  activeTabLine: {
    height: 5,
    alignItems: 'center',
    backgroundColor: '#008080', // Use a color that matches your design
    width: '100%',
    position:'absolute',
    bottom:1
  },
});

export default styles;
