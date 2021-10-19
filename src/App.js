import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <Routes/>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
