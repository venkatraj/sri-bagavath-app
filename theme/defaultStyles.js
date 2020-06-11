import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  rowSpaced: { justifyContent: 'space-between' },
});

export default defaultStyles;
