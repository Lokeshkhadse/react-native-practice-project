import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isMobile = width < 768; // Threshold for stacking layout

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f9fa',
  },

  header: {
    marginBottom: 24,
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
  },

  addButton: {
    backgroundColor: '#f97316',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },

  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: (width - 48) / 2,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  sectionContainer: {
    marginBottom: 20,
  },

  // ✅ Updated: Responsive rowContainer
  rowContainer: {
    flexDirection: isMobile ? 'column' : 'row',
    gap: 12,
    marginBottom: 16,
  },

  leftCol: {
    flex: 1,
    paddingRight: isMobile ? 0 : 8,
    marginBottom: isMobile ? 16 : 0,
  },

  rightCol: {
    flex: 1,
    paddingLeft: isMobile ? 0 : 8,
  },
});
