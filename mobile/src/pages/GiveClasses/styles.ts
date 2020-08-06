import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8257E5',
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    maxWidth: 180,
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 36,
    color: '#FFF',
  },
  description: {
    maxWidth: 240,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#d4c2ff',
    marginTop: 24,
  },
  okButton: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04d361',
    borderRadius: 8,
    marginVertical: 40,
  },
  okButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;
