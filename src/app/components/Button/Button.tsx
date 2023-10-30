import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

type ButtonProps = {
  iconName: string;
  title: string;
  onPress: () => void;
};

const Button = ({iconName, title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Icon style={styles.icon} name={iconName} size={24} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
