import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Index from './app/components/Index.js';

ReactDOM.render((
  <HashRouter>
  <Index />
</HashRouter>
  ), document.getElementById('app')
);
