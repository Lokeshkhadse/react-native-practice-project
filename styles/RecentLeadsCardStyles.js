import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    width: width - 32,
    marginVertical: 12,
    overflow: 'hidden',
    marginTop:2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F97316',
  },
  content: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
  },
  emptyIcon: {
    backgroundColor: '#F3F4F6',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: 4,
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  pageButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  disabled: {
    backgroundColor: '#F9FAFB',
  },
  activePage: {
    backgroundColor: '#F97316',
    borderColor: '#F97316',
  },
  pageText: {
    fontSize: 14,
    color: '#4B5563',
  },
  activeText: {
    color: '#fff',
  },
});

export default styles;
