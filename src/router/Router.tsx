import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {Dimensions} from 'react-native';
import Badges from '../app/components/Badges';
import Applications from '../app/screens/Applications';
import Favorites from '../app/screens/Favorites';
import JobDetail from '../app/screens/JobDetail';
import Jobs from '../app/screens/Jobs';
import {useAppSelector} from '../redux/hooks';
import {
  selectApplications,
  selectFavorites,
  selectJobDetail,
} from '../redux/jobs/selectors';
import Colors from '../theme/Color';
import {
  APPLICATIONS_SCREEN,
  DRAWER,
  FAVORITES_SCREEN,
  JOBS_SCREEN,
  JOB_DETAIL_SCREEN,
} from './routes';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const drawerNavOpts: DrawerNavigationOptions = {
  headerTitleAlign: 'center',
  headerBackgroundContainerStyle: {backgroundColor: Colors.container},
  headerTitleStyle: {color: Colors.primary},
  drawerActiveBackgroundColor: Colors.drawer_container,
  drawerActiveTintColor: Colors.primary,
  drawerInactiveTintColor: Colors.drawer_text,
  drawerType: 'slide',
  drawerLabelStyle: {
    fontSize: 17,
  },
  drawerStyle: {
    backgroundColor: Colors.container,
    width: Dimensions.get('window').width * 0.5,
  },
};

const stackNavOpts: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerBackgroundContainerStyle: {backgroundColor: Colors.container},
  headerTitleStyle: {
    color: Colors.primary,
    width: Dimensions.get('window').width * 0.6,
  },
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={JOBS_SCREEN}
      screenOptions={drawerNavOpts}>
      <Drawer.Screen name={JOBS_SCREEN} component={Jobs} />
      <Drawer.Screen name={FAVORITES_SCREEN} component={Favorites} />
      <Drawer.Screen name={APPLICATIONS_SCREEN} component={Applications} />
    </Drawer.Navigator>
  );
};

const Router = () => {
  const favorites = useAppSelector(selectFavorites);
  const applications = useAppSelector(selectApplications);
  const job = useAppSelector(selectJobDetail);
  const isFavorite =
    job !== null && favorites.filter(f => f.id === job.id).length > 0;
  const isApplied =
    job !== null && applications.filter(a => a.id === job.id).length > 0;

  const renderIcon = () => (
    <Badges isApplied={isApplied} isFavorite={isFavorite} />
  );

  return (
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
  );
};

export default Router;
