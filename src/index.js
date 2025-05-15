import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';

// This file serves as the entry point for the standalone application
const root = createRoot(document.getElementById('app'));
root.render(<Main />); 