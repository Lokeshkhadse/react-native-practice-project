import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  link: {
    fontSize: 14,
    color: '#2563EB',
  },
  performanceList: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  initials: {
    fontWeight: '600',
    fontSize: 13,
  },
  info: {
    flex: 1,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  leads: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    flex: 1,
  },
  progressBar: {
    height: 6,
    borderRadius: 4,
  },
  progressText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#374151',
  },
  attendanceContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    marginTop: 24,
    paddingTop: 16,
  },
  attendanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  attendanceTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937',
  },
  present: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  attendanceList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  attendanceCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashedCircle: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D1D5DB',
  },
  plusMore: {
    fontSize: 12,
    color: '#6B7280',
  },
});

export default styles;
