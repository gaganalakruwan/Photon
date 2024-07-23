// MachineryListStyles.tsx
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#00695C',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    marginRight: 20,
    fontSize: 16,
    color: '#555',
  },
  tabActive: {
    marginRight: 20,
    fontSize: 16,
    color: '#00695C',
    borderBottomWidth: 2,
    borderBottomColor: '#00695C',
  },
  scrollView: {
    flex: 1,
  },
});

export default styles;
