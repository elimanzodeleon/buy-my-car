import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/LandingPage';
import CarAdProvider from './contexts/CarAdContext';

ReactDOM.render(
  <React.StrictMode>
    <CarAdProvider>
      <App />
    </CarAdProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
