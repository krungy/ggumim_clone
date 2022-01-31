import React from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
const App = () => {
  return (
    <>
      <Global styles={ResetStyle} />
      <h1>테스트</h1>
    </>
  );
};

export default App;
