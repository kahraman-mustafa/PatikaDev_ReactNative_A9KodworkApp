import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../theme/Color';
import styles from './Pager.style';

type PagerProps = {
  page: number;
  onPressRight: () => void;
  onPressLeft: () => void;
};

const Pager = ({page, onPressLeft, onPressRight}: PagerProps) => {
  return (
    <View style={styles.container}>
      {page > 1 && (
        <Icon
          style={styles.icon}
          name="arrow-left-bold-circle"
          size={32}
          onPress={() => onPressLeft()}
        />
      )}
      <Text style={styles.pageCount}>Page : {page}</Text>
      <Icon
        style={styles.icon}
        name="arrow-right-bold-circle"
        size={32}
        color={Colors.tertiary}
        onPress={() => onPressRight()}
      />
    </View>
  );
};

export default Pager;
