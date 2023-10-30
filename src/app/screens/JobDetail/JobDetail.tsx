import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {selectJobDetail} from '../../../redux/jobs/selectors';
import {setJobDetail} from '../../../redux/jobs/slice';
import JobContent from '../../components/JobContent';
import JobFooter from '../../components/JobFooter';
import JobHeader from '../../components/JobHeader';
import styles from './JobDetail.style';

const JobDetail = ({navigation}) => {
  const dispatch = useAppDispatch();
  const jobDetail = useAppSelector(selectJobDetail);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      // do something
      dispatch(setJobDetail(null));
    });

    return unsubscribe;
  }, [navigation, dispatch]);

  useEffect(() => {
    navigation.setOptions({title: jobDetail?.name});
  }, [navigation, jobDetail?.name]);

  return (
    <SafeAreaView style={styles.container}>
      <JobHeader />
      <JobContent />
      <JobFooter />
    </SafeAreaView>
  );
};

export default JobDetail;
