import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Toast from 'react-native-toast-message';
import Badges from '../app/components/Badges';
import JobDetail from '../app/screens/JobDetail';
import {useAppSelector} from '../redux/hooks';
import {
  selectApplications,
  selectFavorites,
  selectJobDetail,
} from '../redux/selectors';
import useNetworkListener from '../utils/network';
import {DrawerNavigator} from './DrawerNavigator';
import {stackNavOpts} from './options';
import {DRAWER, JOB_DETAIL_SCREEN} from './routes';

const Stack = createStackNavigator();

const Router = () => {
  const favorites = useAppSelector(selectFavorites);
  const applications = useAppSelector(selectApplications);
  const job = useAppSelector(selectJobDetail);
  const isFavorite =
    job !== null && favorites.filter(f => f.id === job.id).length > 0;
  const isApplied =
    job !== null && applications.filter(a => a.id === job.id).length > 0;

  useNetworkListener();

  const renderIcon = () => (
    <Badges isApplied={isApplied} isFavorite={isFavorite} />
  );

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={stackNavOpts}>
          {/*Call function as Stack.Screen*/}
          <Stack.Screen
            name={DRAWER}
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          {/*This will disable function header*/}
          <Stack.Screen
            name={JOB_DETAIL_SCREEN}
            component={JobDetail}
            options={{headerRight: () => renderIcon()}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default Router;
