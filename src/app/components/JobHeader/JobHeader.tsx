import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {selectJobDetail} from '../../../redux/selectors';
import styles from './JobHeader.style';

const JobHeader = () => {
  const jobDetail = useAppSelector(selectJobDetail);

  return (
    <View style={styles.container}>
      <View style={styles.job_container}>
        <Text style={styles.job}>{jobDetail?.name}</Text>
      </View>
      <View style={styles.row_container}>
        <Text style={styles.row_label}>Company: </Text>
        <Text style={styles.row_value}>{jobDetail?.company.name}</Text>
      </View>
      <View style={styles.row_container}>
        <Text style={styles.row_label}>Locations: </Text>
        <Text style={styles.row_value}>{jobDetail?.locations[0].name}</Text>
      </View>
      <View style={styles.row_container}>
        <Text style={styles.row_label}>Job Level: </Text>
        <Text style={styles.row_value}>{jobDetail?.levels[0].name}</Text>
      </View>
      <View style={styles.subheader_container}>
        <Text style={styles.subheader}>Job Detail</Text>
      </View>
    </View>
  );
};

export default JobHeader;
