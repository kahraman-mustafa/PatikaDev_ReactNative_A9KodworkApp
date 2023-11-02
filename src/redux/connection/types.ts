import {
  NetInfoCellularGeneration,
  NetInfoStateType,
} from '@react-native-community/netinfo';

export interface _Connection {
  isConnected: boolean | null;
  type: NetInfoStateType;
  isOnline: boolean | null;
  cellular: {
    generation: NetInfoCellularGeneration | null;
    carrier: string | null;
  };
  wifi: {
    ssid: string | null;
    bssid: string | null;
    strength: number | null;
    ipAddress: string | null;
    subnet: string | null;
    frequency: number | null;
    linkSpeed: number | null;
    rxLinkSpeed: number | null;
    txLinkSpeed: number | null;
  };
}

export const NoConnectionState: _Connection = {
  isConnected: false,
  type: NetInfoStateType.none,
  isOnline: false,
  cellular: {
    generation: null,
    carrier: null,
  },
  wifi: {
    ssid: null,
    bssid: null,
    strength: null,
    ipAddress: null,
    subnet: null,
    frequency: null,
    linkSpeed: null,
    rxLinkSpeed: null,
    txLinkSpeed: null,
  },
};

export const NoCellularState = {
  generation: null,
  carrier: null,
};

export const NoWifiState = {
  ssid: null,
  bssid: null,
  strength: null,
  ipAddress: null,
  subnet: null,
  frequency: null,
  linkSpeed: null,
  rxLinkSpeed: null,
  txLinkSpeed: null,
};
