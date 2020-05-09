import React from 'react';
// import logo from './logo.svg';
import { GlobalStyles } from './GlobalStyles';
import Router from './Router';
import './firebase';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
