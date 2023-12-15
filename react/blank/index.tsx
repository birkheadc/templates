import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './src/styles/reset.css';
import './src/styles/vars.css';

import './index.css';

import './src/i18n/i18n';


import { BrowserRouter } from 'react-router-dom';
import Root from './src/Root';

const container = document.getElementById('react-root');
if (container != null) {
  const root = createRoot(container);
  root.render(<BrowserRouter><Root /></BrowserRouter>);
}