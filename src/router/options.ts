import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Dimensions} from 'react-native';
import Colors from '../theme/Color';

export const drawerNavOpts: DrawerNavigationOptions = {
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

export const stackNavOpts: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerBackgroundContainerStyle: {backgroundColor: Colors.container},
  headerTitleStyle: {
    color: Colors.primary,
    width: Dimensions.get('window').width * 0.6,
  },
};
