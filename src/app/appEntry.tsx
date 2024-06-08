import React from 'react';
import ReactDOM from 'react-dom/client';
import {BaseLayout} from '@/widgets';
import '@/app/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BaseLayout />
  </React.StrictMode>,
);