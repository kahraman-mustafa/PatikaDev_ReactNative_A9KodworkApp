import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../../../redux/hooks';
import {removeFavorite} from '../../../redux/jobs/slice';
import {_Job} from '../../../redux/jobs/types';
import Button from '../Button';
import styles from './FavItem.style';

type FavItemProps = {
  item: _Job;
  onSelect: any;
};

const FavItem = ({item, onSelect}: FavItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.item_container}>
          <Text style={styles.job}>{item.name}</Text>
          <Text style={styles.company}>{item.company.name}</Text>
          <Text style={styles.location}>{item.locations[0].name}</Text>
          <Text style={styles.level}>{item.levels[0].name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.button_container}>
        <Button
          iconName="heart-minus"
          title="Remove Favorite"
          onPress={() => dispatch(removeFavorite(item.id))}
        />
      </View>
    </View>
  );
};

export default FavItem;
