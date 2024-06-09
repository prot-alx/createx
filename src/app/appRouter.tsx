import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '@/widgets';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
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
      {
        path: '/delivery',
        element: <div>delivery</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/faq',
        element: <div>faq</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/new-arrivals',
        element: <div>new-arrivals</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/brands',
        element: <div>brands</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/sales',
        element: <div>sales</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/login',
        element: <div>LOGIN</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/register',
        element: <div>REGISTER</div>,
        errorElement: <div>404</div>
      },
    ],
  },
]);
