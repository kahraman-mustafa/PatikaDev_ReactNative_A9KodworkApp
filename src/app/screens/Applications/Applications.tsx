import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {setJobDetail} from '../../../redux/jobs/slice';
import {_Job} from '../../../redux/jobs/types';
import {selectApplications} from '../../../redux/selectors';
import {DRAWER, JOBS_SCREEN, JOB_DETAIL_SCREEN} from '../../../router/routes';
import ApplicationItem from '../../components/ApplicationItem';
import styles from './Applications.style';

const Applications = ({navigation}) => {
  const applications = useAppSelector(selectApplications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      // do something
      navigation.replace(DRAWER, {screen: JOBS_SCREEN});
    });

    return unsubscribe;
  }, [navigation, dispatch]);

  const handlePressApplication = (item: _Job) => {
    dispatch(setJobDetail(item));
    navigation.navigate(JOB_DETAIL_SCREEN);
  };

  const renderApplication = (item: _Job) => {
    return (
      <ApplicationItem
        item={item}
        onSelect={() => handlePressApplication(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={applications}
        renderItem={({item}) => renderApplication(item)}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Applications;
