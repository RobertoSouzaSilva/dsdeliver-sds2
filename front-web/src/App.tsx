import { ToastContainer  } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import './App.css';
import Navbar from './navbar';
import Routes from './routes';

function App() {
  return (
    <div >
        <>
        <Routes /> 
        <ToastContainer />
        </>
    </div>
  );
}

export default App;
