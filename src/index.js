import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/store/store';
import './styles/styles.scss';
import App from './App';

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} persistor={persistor}/>
  </React.StrictMode>,
  document.getElementById('root')
);