import React from 'react';
import PublicRouths from "./publicRouths/index";
import PrivateRouths from "./PrivateRouths/index";

const index = () => {
  return (
    <div>
        <PublicRouths/>
        <PrivateRouths/>
    </div>
  )
}

export default index