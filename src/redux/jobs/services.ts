import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

// const API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';

export const getJobsAsync = createAsyncThunk(
  'jobs/getJobsAync',
  async ({page}: {page: number}) => {
    /*const params = new URLSearchParams([
    ['page', '1'],
    ['descending', 'true'],
  ]);*/
    const params = {
      page,
      descending: true,
    };
    const response = await axios.get(`${Config.API_BASE_URL}/jobs`, {params});
    return response.data;
  },
);
