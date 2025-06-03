import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { NavigationBridgeComponent } from './components/NavigationBridge.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationBridgeComponent />
      <App />
    </BrowserRouter>
  </StrictMode>
);
