import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {_Job} from '../../../redux/jobs/types';
import {selectApplications, selectFavorites} from '../../../redux/selectors';
import Badges from '../Badges';
import styles from './JobItem.style';

type JobItemProps = {
  item: _Job;
  onSelect: any;
};

const JobItem = ({item, onSelect}: JobItemProps) => {
  const favorites = useAppSelector(selectFavorites);
  const applications = useAppSelector(selectApplications);
  const isFavorite = favorites.filter(f => f.id === item.id).length > 0;
  const isApplied = applications.filter(a => a.id === item.id).length > 0;

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.job}>{item.name}</Text>
        <Text style={styles.company}>{item.company.name}</Text>
        <Text style={styles.location}>{item.locations[0].name}</Text>
        <View style={styles.row_container}>
          <Badges isApplied={isApplied} isFavorite={isFavorite} />
          <Text style={styles.level}>{item.levels[0].name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobItem;
