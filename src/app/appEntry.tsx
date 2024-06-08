import React from 'react';
import ReactDOM from 'react-dom/client';
import { BaseLayout } from '@/widgets';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';
import '@/app/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BaseLayout>
      <RouterProvider router={appRouter} />
    </BaseLayout>
  </React.StrictMode>,
);
