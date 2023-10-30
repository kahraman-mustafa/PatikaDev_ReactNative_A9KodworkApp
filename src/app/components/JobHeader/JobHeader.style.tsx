import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Color';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  job_container: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  job: {
    flex: 1,
    color: Colors.text_dark,
    fontWeight: 'bold',
    fontSize: 21,
  },
  row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  row_label: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  row_value: {
    flex: 1,
    color: Colors.drawer_text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subheader_container: {
    flexDirection: 'row',
  },
  subheader: {
    flex: 1,
    textAlign: 'center',
    color: Colors.text_dark,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
