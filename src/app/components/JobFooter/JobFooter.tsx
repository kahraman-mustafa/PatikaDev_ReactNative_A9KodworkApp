import React from 'react';
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  addFavorite,
  removeFavorite,
  revertApplication,
  submitApplication,
} from '../../../redux/jobs/slice';
import {
  selectApplications,
  selectFavorites,
  selectJobDetail,
} from '../../../redux/selectors';
import Button from '../Button';
import styles from './JobFooter.style';

const JobFooter = props => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const applications = useAppSelector(selectApplications);
  const job = useAppSelector(selectJobDetail);
  const isFavorite =
    job !== null && favorites.filter(f => f.id === job.id).length > 0;
  const isApplied =
    job !== null && applications.filter(a => a.id === job.id).length > 0;
  // const isFavorite =
  //   job !== null && favorites.filter(f => f.id === job.id).length > 0;
  // const isApplied =
  //   job !== null && applications.filter(a => a.id === job.id).length > 0;

  const handlePressApply = () => {
    if (isApplied) {
      dispatch(revertApplication(job.id));
    } else {
      job && dispatch(submitApplication(job));
    }
  };

  const handlePresFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavorite(job.id));
    } else {
      job && dispatch(addFavorite(job));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <Button
          iconName={isApplied ? 'pen-off' : 'pen-plus'}
          title={isApplied ? 'Revert Apply' : 'Apply'}
          onPress={handlePressApply}
        />
      </View>
      <View style={styles.button_container}>
        <Button
          iconName={isFavorite ? 'heart-minus' : 'heart-plus-outline'}
          title={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          onPress={handlePresFavorites}
        />
      </View>
    </View>
  );
};

export default JobFooter;
