import './scss/style.scss';
import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, BrowserHistory } from 'react-router-dom';
import routes from './routes';

import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
