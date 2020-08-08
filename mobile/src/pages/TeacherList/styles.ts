import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f7',
  },
  teacherList: {
    marginTop: -40,
  },
  teacherListContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  input: {
    height: 54,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04d361',
    borderRadius: 8,
  },
  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFFF',
  },
});

export default styles;
