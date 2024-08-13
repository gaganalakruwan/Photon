import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '80%',
    height: 300,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#333333',
    fontWeight: 'bold', 
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    color: '#158282'
  },
  indicator: {
    width: 50,
    height: 4,
    backgroundColor: '#158282',
    marginHorizontal: 5,
  },
  indicatorActive: {
    width: 25, // Shorter line for the active indicator
    backgroundColor: '#158282',
  },
  button: {
    height: 40,
    width: '80%',
    backgroundColor: '#008080', // Assuming colors.green is #008080
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
