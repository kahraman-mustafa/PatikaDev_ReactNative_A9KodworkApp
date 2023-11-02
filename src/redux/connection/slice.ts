// DUCKS pattern
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {STATE_CONNECTION} from '../constants';
import {NoConnectionState, _Connection} from './types';

const initialState: _Connection = NoConnectionState;

const connectionSlice = createSlice({
  name: STATE_CONNECTION,
  initialState,
  reducers: {
    setConnectionState: (state, action: PayloadAction<_Connection>) => {
      const {isConnected, type, isOnline, cellular, wifi} = action.payload;
      state.isConnected = isConnected;
      state.type = type;
      state.isOnline = isOnline;
      state.cellular = cellular;
      state.wifi = wifi;
    },
  },
});

export default connectionSlice.reducer;
export const {setConnectionState} = connectionSlice.actions;
