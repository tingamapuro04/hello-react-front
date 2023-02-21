import { configureStore } from '@reduxjs/toolkit';
import localApiData from '../features/counter/dataasync/dataSlice';

const store = configureStore({
  reducer: {
    apiData: localApiData,
  },
});

export default store;
