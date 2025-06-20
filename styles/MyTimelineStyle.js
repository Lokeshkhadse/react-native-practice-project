import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FB923C', // Tailwind Orange-400
    marginBottom: 6,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom:5,
  },
  subheading: {
    fontSize: 16,
    color: '#6B7280', // Gray-500
    marginBottom: 24,
    textAlign: 'center',
  },
  locationBox: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  locationText: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 6,
    fontWeight: '500',
  },
  errorText: {
    color: '#EF4444', // Red-500
    fontSize: 15,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginVertical: 24,
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  clockIn: {
    backgroundColor: '#16A34A', // Green-600
  },
  clockOut: {
    backgroundColor: '#DC2626', // Red-600
  },
  disabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 17,
  },
  map: {
    width: width - 40,
    height: 450,
    borderRadius: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB', // Tailwind Gray-200
  },
});

export default styles;
