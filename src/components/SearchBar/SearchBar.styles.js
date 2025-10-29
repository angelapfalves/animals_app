import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row'

  },
  input: {
    height: 50,
    backgroundColor: '#FAF5EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FAF5EB',
    flex: 1,
  },
  search: {
    height: 50,
    backgroundColor: '#4492b9',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#96A3A2',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10

  },
  disabledSearch: {
    backgroundColor: '#a0a0a0', // grey when disabled
  },
});
