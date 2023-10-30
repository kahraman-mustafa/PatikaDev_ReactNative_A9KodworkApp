import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.border,
    marginHorizontal: 4,
  },
  scrollview: {
    flex: 1,
  },
});

const getTagsStyles = () => {
  return {
    body: {
      color: Colors.text_dark,
      backgroundColor: Colors.container,
      paddingHorizontal: 5,
    },
  };
};

export const tagStyles = getTagsStyles();
