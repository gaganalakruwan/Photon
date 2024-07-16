// style.tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2F2E9',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,  // Adjust size as needed
    height: 150,  // Adjust size as needed
    resizeMode: 'contain',
  },
});

export default styles;
