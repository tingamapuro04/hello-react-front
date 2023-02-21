import React from 'react'
import { useSelector } from 'react-redux'

const Connect = () => {

  const data = useSelector((state) => state.apiData.data);

  return (
    <div>
      we are now connected to
      {data && <h1>{data.language}</h1>}
      {data && <p>{data.body}</p>}
    </div>
  );
}

export default Connect
