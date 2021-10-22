import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <Routes/>
      <GlobalStyles />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
