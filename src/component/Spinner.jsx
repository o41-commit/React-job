import React from 'react'
import { ClipLoader } from 'react-spinners';

const override = {
  display: "block",
  margin: "100 auto",
  borderColor: "red",
};

const Spinner = ({loading}) => {
  return (
    <ClipLoader
        color ="#4338CA"
        loading={loading}
        cssOverride= {override}
        size={150}
    />
      
  )
}

export default Spinner
