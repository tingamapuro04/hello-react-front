import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData } from '../features/counter/dataasync/dataSlice';

const Connect = () => {

  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData())
  }, [dispatch])

  const data = useSelector((state) => state.apiData.data);

  return (
    <div>
      we are now connected to
      <h1>{data.language}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default Connect
