import {RootState} from '../store';

export const selectJobs = (state: RootState) => state.jobs.items;
export const selectIsLoadingJobs = (state: RootState) => state.jobs.isLoading;
export const selectErrorJobs = (state: RootState) => state.jobs.error;
export const selectJobDetail = (state: RootState) => state.jobs.jobDetail;
export const selectFavorites = (state: RootState) => state.jobs.favorites;
export const selectApplications = (state: RootState) => state.jobs.applications;
