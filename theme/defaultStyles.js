import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
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
    margin: 20,
    right: 0,
    bottom: 50,
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
