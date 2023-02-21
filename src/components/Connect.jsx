import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getApiData } from '../features/counter/dataasync/dataSlice';

const Connect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData())
  }, [dispatch])

  getApiData()
  return (
    <div>
      we are now connected to
    </div>
  )
}

export default Connect
