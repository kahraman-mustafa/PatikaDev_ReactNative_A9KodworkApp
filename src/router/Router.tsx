import NetInfo, {NetInfoStateType} from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import Badges from '../app/components/Badges';
import JobDetail from '../app/screens/JobDetail';
import {setConnectionState} from '../redux/connection/slice';
import {
  NoCellularState,
  NoConnectionState,
  NoWifiState,
  _Connection,
} from '../redux/connection/types';
import {useAppDispatch, useAppSelector, useAppSelector} from '../redux/hooks';
import {
  selectApplications,
  selectFavorites,
  selectJobDetail,
} from '../redux/selectors';
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Subscribe to network connectivity changes
    const unsubscribeNetInfo = NetInfo.addEventListener(state => {
      let connection: _Connection = {...NoConnectionState};
      let msgTextOnline = '';
      if (state.isConnected) {
        msgTextOnline = msgTextOnline + 'Connected! \n';
        connection.isConnected = state.isConnected;
        connection.type = state.type;
        msgTextOnline = msgTextOnline + `Connection type: ${connection.type}\n`;
        connection.isOnline = state.isInternetReachable;
        msgTextOnline =
          msgTextOnline +
          `Internet connection ${!connection.isOnline && 'not '} available!\n`;
        if (state.type === NetInfoStateType.cellular) {
          connection.cellular = {
            generation: state.details.cellularGeneration,
            carrier: state.details.carrier,
          };
          msgTextOnline =
            msgTextOnline +
            `Cellular generation: ${connection.cellular.generation}\n`;
          msgTextOnline =
            msgTextOnline +
            `Cellular carrier: ${connection.cellular.carrier}\n`;
          connection.wifi = {...NoWifiState};
        } else if (state.type === 'wifi') {
          connection.cellular = {...NoCellularState};
          connection.wifi = {
            ssid: state.details.ssid,
            bssid: state.details.bssid,
            strength: state.details.strength,
            ipAddress: state.details.ipAddress,
            subnet: state.details.subnet,
            frequency: state.details.frequency,
            linkSpeed: state.details.linkSpeed,
            rxLinkSpeed: state.details.rxLinkSpeed,
            txLinkSpeed: state.details.txLinkSpeed,
          };
          msgTextOnline =
            msgTextOnline + `Wifi SSID: ${connection.wifi.ssid}\n`;
          msgTextOnline =
            msgTextOnline + `IP Address: ${connection.wifi.ipAddress}\n`;
        }
      } else {
        msgTextOnline = msgTextOnline + 'Not connected to any network';
      }

      if (connection.isOnline) {
        Toast.show({
          type: 'success',
          text1: 'Device is connected to internet!',
          text2: msgTextOnline,
        });
      } else if (connection.isConnected) {
        Toast.show({
          type: 'info',
          text1: 'Connected to a network but internet not available!',
          text2: msgTextOnline,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'No network connection!',
          text2: msgTextOnline,
        });
      }

      dispatch(setConnectionState(connection));
    });

    return () => {
      // Unsubscribe from network connectivity changes
      unsubscribeNetInfo();
    };
  }, [dispatch]);

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
