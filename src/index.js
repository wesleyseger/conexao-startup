import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes2 from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes2 />
  </React.StrictMode>
);