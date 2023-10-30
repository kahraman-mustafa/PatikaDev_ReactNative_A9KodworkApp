// DUCKS pattern
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {getJobsAsync} from './services';
import {_Job, _Jobs, _idJob} from './types';

const initialState: _Jobs = {
  items: [],
  favorites: [],
  applications: [],
  isLoading: false,
  error: null,
  jobDetail: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
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
  },
  extraReducers: builder => {
    // get jobs
    builder.addCase(getJobsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getJobsAsync.fulfilled, (state, action) => {
      // action return type is jobs: _Job[] <=== action.payload.results;
      state.isLoading = false;
      state.items = action.payload.results;
    });
    builder.addCase(getJobsAsync.rejected, (state, action) => {
      state.isLoading = false;
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
} = jobsSlice.actions;
