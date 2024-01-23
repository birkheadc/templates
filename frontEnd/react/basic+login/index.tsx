import * as React from 'react';
import Modal from 'react-modal';
import { createRoot } from 'react-dom/client';

import './src/styles/reset.css';
import './src/styles/vars.css';
import './src/styles/global.css';
import './src/styles/forms.css';

import App from './src/app/App';

Modal.setAppElement('#react-root');
Modal.defaultStyles.content = {};
Modal.defaultStyles.overlay = {
  ...Modal.defaultStyles.overlay,
  backgroundColor: 'rgba(0, 0, 0, 0.4)'
};

const container = document.getElementById('react-root');
if (container != null) {
  const root = createRoot(container);
  root.render(<App />);
}