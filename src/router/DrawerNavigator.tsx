import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Applications from '../app/screens/Applications';
import Favorites from '../app/screens/Favorites';
import Jobs from '../app/screens/Jobs';
import {drawerNavOpts} from './options';
import {APPLICATIONS_SCREEN, FAVORITES_SCREEN, JOBS_SCREEN} from './routes';

export const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={drawerNavOpts}>
      <Drawer.Screen name={JOBS_SCREEN} component={Jobs} />
      <Drawer.Screen name={FAVORITES_SCREEN} component={Favorites} />
      <Drawer.Screen name={APPLICATIONS_SCREEN} component={Applications} />
    </Drawer.Navigator>
  );
};
