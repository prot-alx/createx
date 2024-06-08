import { createBrowserRouter } from 'react-router-dom';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <div>MAIN</div>,
    errorElement: <div>404</div>
  },
  {
    path: '/contacts',
    element: <div>CONTACTS</div>,
    errorElement: <div>404</div>
  },
  {
    path: '/catalog',
    element: <div>CATALOG</div>,
    errorElement: <div>404</div>
  },
  {
    path: '/new',
    element: <div>NEW ARRIVALS</div>,
    errorElement: <div>404</div>
  },
  {
    path: '/trending',
    element: <div>TRENDING</div>,
    errorElement: <div>404</div>
  },
  {
    path: '/track',
    element: <div>TRACK</div>,
    errorElement: <div>404</div>
  },
  {
    path: '/blog',
    element: <div>blog</div>,
    errorElement: <div>404</div>
  },
]);
