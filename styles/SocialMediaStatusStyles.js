import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  dropdownText: {
    fontSize: 12,
    color: '#374151',
  },
  cardSection: {
    marginBottom: 24,
  },
  cardSectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#4B5563',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  cardName: {
    fontSize: 12,
    fontWeight: '500',
  },
  cardValue: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default styles;

