import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Color';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.tertiary_container,
    marginHorizontal: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.tertiary_container,
  },
});
