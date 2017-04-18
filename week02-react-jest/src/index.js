import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Address from './components/Address';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <div>
        <Header/>
        <App />
        <Address />
    </div>,
  document.getElementById('root')
);
