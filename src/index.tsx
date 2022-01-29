import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import GlobalStyle from './components/bosons/GlobalStyle'
import './i18n/i18n';
//import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
