import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    backgroundColor: '#eee',
    borderRadius: 32,
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32264d',
  },
  subject: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6a6180',
    marginTop: 4,
  },
  bio: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180',
    marginHorizontal: 24,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#fafafc',
    padding: 24,
    marginTop: 24,
  },
  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6a6180',
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#8257e5',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  favoriteButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8257e5',
    borderRadius: 8,
    marginRight: 8,
  },
  favorited: {
    backgroundColor: '#e33d3d',
  },
  contactButton: {
    height: 56,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04d361',
    borderRadius: 8,
    marginRight: 8,
  },
  contactButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFFF',
    marginLeft: 16,
  },
});

export default styles;
