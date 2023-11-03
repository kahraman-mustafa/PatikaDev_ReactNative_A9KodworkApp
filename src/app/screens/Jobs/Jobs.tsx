import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  SafeAreaView,
  Text,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {getJobsAsync} from '../../../redux/jobs/services';
import {setJobDetail, setPage} from '../../../redux/jobs/slice';
import {_Job} from '../../../redux/jobs/types';
import {
  selectErrorJobs,
  selectIsLoadingJobs,
  selectJobs,
  selectPage,
} from '../../../redux/selectors';
import {JOB_DETAIL_SCREEN} from '../../../router/routes';
import JobItem from '../../components/JobItem';
import Pager from '../../components/Pager';
import styles from './Jobs.style';

const Jobs = ({navigation}) => {
  const isLoading = useAppSelector(selectIsLoadingJobs);
  const error = useAppSelector(selectErrorJobs);
  const jobs = useAppSelector(selectJobs);
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getJobsAsync({page}));
  }, [dispatch, page]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleNextPage = () => dispatch(setPage(page + 1));
  const handlePreviousPage = () => dispatch(setPage(page - 1));

  const handlePressJobItem = (item: _Job) => {
    dispatch(setJobDetail(item));
    navigation.navigate(JOB_DETAIL_SCREEN);
  };

  const renderJobItem = (item: _Job) => (
    <JobItem item={item} onSelect={() => handlePressJobItem(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pager
        page={page}
        onPressRight={handleNextPage}
        onPressLeft={handlePreviousPage}
      />
      {isLoading ? (
        <ActivityIndicator
          style={styles.activity_indicator}
          size="large"
          color="red"
        />
      ) : error ? (
        <Text>ERROR: {error?.toString()}</Text>
      ) : (
        <FlatList
          data={jobs}
          renderItem={({item}) => renderJobItem(item)}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default Jobs;
