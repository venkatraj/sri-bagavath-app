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
  btnContainer: { marginHorizontal: 20 },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
  occupy: {
    flex: 1,
  },
});

export default defaultStyles;
