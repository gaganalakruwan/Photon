import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E2F2E9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    width: '200%',  
  },
  tabContentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft :250 ,
  },
  tab: {    alignItems : "center" ,
    justifyContent: 'center',
    paddingVertical: 30,
    marginHorizontal: 10,  // Add margin to space out the tabs
  },
  tabText: {
    color: 'black',
    fontSize: 30,
    paddingRight:30,
  },
  activeTabLine: {
    height: 5,
    alignItems : "center",
    backgroundColor: '#008080',  // Use a color that matches your design
    width: '74%',
    marginTop: 10,
  },
});

export default styles;

   
