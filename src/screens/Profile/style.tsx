import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  mainContainerModalVisible: {
    backgroundColor: colors.iconGray,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    alignSelf: 'center',
    marginTop: 5,
  },

  name: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    color: colors.black,
  },

  profileContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: -2,
    backgroundColor: colors.green,
    borderRadius: 50,
    padding: 7,
    elevation: 5,
  },

  menuContainer: {
    width: '100%',
    marginLeft: 45,
  },

  editProfileContainer: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.black,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: colors.iconGray,
    backgroundColor: colors.iconGray,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    color: colors.black,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  updateButton: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 25,
    width: '65%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.green,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.black,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: colors.iconGray,
    borderRadius: 20,
  },
  confirmButton: {
    backgroundColor: colors.green,
    borderRadius: 20,
  },
  noButtonText: {
    color: colors.green,
    fontSize: 16,
    fontWeight: '600',
  },

  yesButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
