import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
