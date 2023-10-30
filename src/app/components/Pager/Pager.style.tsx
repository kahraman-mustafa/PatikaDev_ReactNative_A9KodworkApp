import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../theme/Color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.tertiary,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 100,
    maxWidth: Dimensions.get('window').width / 2,
    marginBottom: 4,
  },
  icon: {
    color: Colors.tertiary_container,
  },
  pageCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    color: Colors.tertiary_container,
  },
});
