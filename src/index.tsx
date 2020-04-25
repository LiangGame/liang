import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/index.css';
import { stepLogLevel } from './common';
import log from 'loglevel';
import App from '@/App';

stepLogLevel('Liang');
log.debug('init -->', 'ready');

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
