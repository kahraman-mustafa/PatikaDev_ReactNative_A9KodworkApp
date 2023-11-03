// DUCKS pattern
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {STATE_JOBS} from '../constants';
import {getJobsAsync} from './services';
import {_Job, _Jobs, _idJob} from './types';

const initialState: _Jobs = {
  items: [],
  favorites: [],
  applications: [],
  isLoading: false,
  error: null,
  jobDetail: null,
  page: 1,
};

const jobsSlice = createSlice({
  name: STATE_JOBS,
  initialState,
  reducers: {
    setJobDetail: (state, action: PayloadAction<_Job | null>) => {
      state.jobDetail = action.payload;
    },
    addFavorite: (state, action: PayloadAction<_Job>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<_idJob>) => {
      state.favorites = state.favorites.filter(f => f.id !== action.payload);
    },
    submitApplication: (state, action: PayloadAction<_Job>) => {
      state.applications.push(action.payload);
    },
    revertApplication: (state, action: PayloadAction<_idJob>) => {
      state.applications = state.applications.filter(
        a => a.id !== action.payload,
      );
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    // get jobs
    builder.addCase(getJobsAsync.pending, state => {
      state.isLoading = true;
      state.error = null;
      state.items = [];
    });
    builder.addCase(getJobsAsync.fulfilled, (state, action) => {
      // action return type is jobs: _Job[] <=== action.payload.results;
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.results;
      console.log(
        `Async results: ${action.payload.results.map((r: _Job) => r.name)}`,
      );
    });
    builder.addCase(getJobsAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.items = [];
      state.error = action.error.message;
    });
  },
});

export default jobsSlice.reducer;
export const {
  setJobDetail,
  addFavorite,
  removeFavorite,
  submitApplication,
  revertApplication,
  setPage,
} = jobsSlice.actions;
