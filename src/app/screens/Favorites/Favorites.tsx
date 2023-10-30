import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {selectFavorites} from '../../../redux/jobs/selectors';
import {setJobDetail} from '../../../redux/jobs/slice';
import {_Job} from '../../../redux/jobs/types';
import {DRAWER, JOBS_SCREEN, JOB_DETAIL_SCREEN} from '../../../router/routes';
import FavItem from '../../components/FavItem';
import styles from './Favorites.style';

const Favorites = ({navigation}) => {
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      // do something
      navigation.replace(DRAWER, {screen: JOBS_SCREEN});
    });

    return unsubscribe;
  }, [navigation, dispatch]);

  const handlePressFavorite = (item: _Job) => {
    dispatch(setJobDetail(item));
    navigation.navigate(JOB_DETAIL_SCREEN);
  };

  const renderFavorite = (item: _Job) => {
    return <FavItem item={item} onSelect={() => handlePressFavorite(item)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => renderFavorite(item)}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Favorites;
