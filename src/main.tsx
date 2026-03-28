import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import '@fontsource/barlow/100.css';
import '@fontsource/barlow/300.css';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/700.css';
import '@fontsource/barlow/900.css';

import './styles/main.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
