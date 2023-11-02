import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import connectionReducer from './connection/slice';
import {
  STATE_CONNECTION,
  STATE_JOBS,
  STATE_JOBS_APPLICATIONS,
  STATE_JOBS_FAVORITES,
} from './constants';
import jobsReducer from './jobs/slice';

const persistConfigJobs = {
  key: STATE_JOBS,
  storage: AsyncStorage,
  whitelist: [STATE_JOBS_FAVORITES, STATE_JOBS_APPLICATIONS],
};

const persistedJobsReducer = persistReducer(persistConfigJobs, jobsReducer);

export const rootReducer = combineReducers({
  // Persisted state reducers
  [STATE_JOBS]: persistedJobsReducer,
  [STATE_CONNECTION]: connectionReducer,
  // Not persisting reducers
});
