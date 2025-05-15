import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';

const mount = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<Main />);
  
  return {
    unmount: () => {
      root.unmount();
    }
  };
};

// If we are in development and running in isolation,
// or if we are in production and running standalone
const devRoot = document.getElementById('app');
if (devRoot) {
  mount(devRoot);
}

export { mount }; 