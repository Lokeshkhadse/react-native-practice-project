// styles/dashInfoStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const topOffset = height * 0.04; // 4% of screen height

const dashInfoStyles = StyleSheet.create({
  dashInfoContainer: {
    paddingHorizontal: 12,
    paddingTop: topOffset,
    backgroundColor: '#f8f9fa',
    minHeight: height,
    marginBottom: -450,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f97316',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    width: width * 0.55,
  },

  addButton: {
    backgroundColor: '#f97316',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },

  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },

  statRow: {
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  statCard: {
    backgroundColor: '#fff',
    width: width * 0.40,
    borderRadius: 16,
    padding: 10,
    marginBottom: 1,
    borderWidth: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // Shadow for iOS and elevation for Android
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
});

export default dashInfoStyles;
