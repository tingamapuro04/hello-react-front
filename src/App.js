import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getApiData } from './features/counter/dataasync/dataSlice';
import './App.css';
import Connect from './components/Connect';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  return (
    <div className="App">
      <Connect />
    </div>
  );
}

export default App;
