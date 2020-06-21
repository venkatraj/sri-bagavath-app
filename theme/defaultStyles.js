import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 5,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  rowSpaced: { justifyContent: 'space-between' },
  btnContainer: { marginHorizontal: 20 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 0,
  },
  occupy: {
    flex: 1,
    marginVertical: 20,
  },
  bottomSpace: {
    paddingBottom: 40,
  },
});

export default defaultStyles;
