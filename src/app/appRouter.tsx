import { createBrowserRouter } from 'react-router-dom';
import { ShopPage } from '@/pages';
import { BaseLayout } from '@/widgets';
import ProductDetails from '@/entities/shop/product-details';

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
        path: '/shop',
        element: <ShopPage />,
        errorElement: <div>404</div>,
      },
      {
        path: '/shop',
        element: <ShopPage />,
        errorElement: <div>404</div>,
      },
      {
        path: '/shop/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/contacts',
        element: <div>CONTACTS</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/profile',
        element: <div>PROFILE</div>,
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
        element: <div>BLOG</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/delivery',
        element: <div>DELIVERY</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/faq',
        element: <div>FAQ</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/brands',
        element: <div>BRANDS</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/sales',
        element: <div>SALES</div>,
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
      {
        path: '/cart',
        element: <div>CART</div>,
        errorElement: <div>404</div>
      },
      {
        path: '/wishlist',
        element: <div>WISHLIST</div>,
        errorElement: <div>404</div>
      },
    ],
  },
]);
