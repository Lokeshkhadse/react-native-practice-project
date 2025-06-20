import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    maxHeight: '90%',
    elevation: 5,
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,

  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937', // text-gray-800
  },
  closeButton: {
    fontSize: 22,
    color: '#9CA3AF', // gray-400
    fontWeight: 'bold',
  },
  inputGroup: {
    marginTop: 10,
  },
  inputWrapper: {
    marginBottom: 14,
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    color: '#374151', // gray-700
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#D1D5DB', // gray-300
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFB', // light gray
    color: '#111827', // dark text
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    gap: 12,
  },
  cancelButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#E5E7EB', // gray-200
    borderRadius: 8,
  },
  submitButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F97316', // orange-500
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
