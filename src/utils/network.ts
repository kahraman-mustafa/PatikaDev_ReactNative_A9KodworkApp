import NetInfo, {NetInfoStateType} from '@react-native-community/netinfo';
import {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {setConnectionState} from '../redux/connection/slice';
import {
  NoCellularState,
  NoConnectionState,
  NoWifiState,
  _Connection,
} from '../redux/connection/types';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getJobsAsync} from '../redux/jobs/services';
import {selectJobs, selectPage} from '../redux/selectors';

const useNetworkListener = () => {
  const jobs = useAppSelector(selectJobs);
  const page = useAppSelector(selectPage);

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

      console.log('Connection changed: ' + msgTextOnline);
      if (connection.isOnline) {
        Toast.show({
          type: 'success',
          text1: 'Device is connected to internet!',
          visibilityTime: 1500,
          // text2: msgTextOnline,
        });
      } else if (connection.isConnected) {
        Toast.show({
          type: 'info',
          text1: 'Connected to a network but internet not available!',
          visibilityTime: 1500,
          // text2: msgTextOnline,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'No network connection!',
          visibilityTime: 1500,
          // text2: msgTextOnline,
        });
      }

      if (connection.isOnline && jobs.length < 1) {
        dispatch(getJobsAsync({page}));
      }
      dispatch(setConnectionState(connection));
    });

    return () => {
      // Unsubscribe from network connectivity changes
      unsubscribeNetInfo();
    };
  }, [dispatch]);
};

export default useNetworkListener;
