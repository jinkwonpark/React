import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App01 from './App01.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App01 />
  </StrictMode>
);
