import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from './components/DataMaven';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <div>
        <Router>
        <DataMaven/>
        </Router>
    </div>,
    document.getElementById('root')
);
