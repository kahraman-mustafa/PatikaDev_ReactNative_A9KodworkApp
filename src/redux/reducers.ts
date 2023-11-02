import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {STATE_JOBS_APPLICATIONS, STATE_JOBS_FAVORITES} from './constants';
import jobsReducer from './jobs/slice';

const persistConfigJobs = {
  key: 'jobs',
  storage: AsyncStorage,
  whitelist: [STATE_JOBS_FAVORITES, STATE_JOBS_APPLICATIONS],
};

const persistedJobsReducer = persistReducer(persistConfigJobs, jobsReducer);

export const rootReducer = combineReducers({
  // Persisted state reducers
  jobs: persistedJobsReducer,
  // Not persisting reducers
});
