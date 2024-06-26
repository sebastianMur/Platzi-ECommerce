import { useRoutes } from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import SignIn from '../SIgnIn';

export const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/clothes',
      element: <Home />,
    },
    {
      path: '/electronics',
      element: <Home />,
    },
    {
      path: '/furnitures',
      element: <Home />,
    },
    {
      path: '/toys',
      element: <Home />,
    },
    {
      path: '/others',
      element: <Home />,
    },
    {
      path: '/my-account',
      element: <MyAccount />,
    },
    {
      path: '/my-orders',
      element: <MyOrders />,
    },
    {
      path: '/my-orders/last',
      element: <MyOrder />,
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />,
    },
    {
      path: '/my-order',
      element: <MyOrder />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
  ]);

  return routes;
};
