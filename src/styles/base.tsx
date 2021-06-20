import { StyleSheet } from 'react-native';

const BaseStyles = StyleSheet.create({
  shadowBase: {
    elevation: 2,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonBase: {
    marginBottom: 20,
  },
  layout: {
    flex: 1,
    position: 'relative',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

export default BaseStyles;
