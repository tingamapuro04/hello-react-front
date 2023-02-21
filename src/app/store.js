import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import localApiData from '../features/counter/dataasync/dataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    apiData: localApiData
  },
});
