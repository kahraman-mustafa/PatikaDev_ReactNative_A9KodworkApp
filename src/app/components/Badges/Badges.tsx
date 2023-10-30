import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../theme/Color';
import styles from './Badges.style';

type BadgesProps = {
  isApplied: boolean;
  isFavorite: boolean;
};

const Badges = ({isApplied, isFavorite}: BadgesProps) => {
  return (
    <View style={styles.container}>
      <Icon
        name={isApplied ? 'clipboard-check' : 'clipboard-outline'}
        size={24}
        color={Colors.tertiary}
        style={styles.icon}
      />
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={24}
        color={Colors.tertiary}
        style={styles.icon}
      />
    </View>
  );
};

export default Badges;
