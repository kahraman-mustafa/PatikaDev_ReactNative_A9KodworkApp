import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Color';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.container,
    padding: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.border,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  job: {
    color: Colors.text_dark,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 3,
  },
  company: {
    color: Colors.text_dark,
    fontSize: 18,
    marginBottom: 3,
  },
  location: {
    color: Colors.text_bright,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: Colors.primary,
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginBottom: 3,
  },
  row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  level: {
    flex: 1,
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginBottom: 3,
    marginRight: 3,
  },
});
