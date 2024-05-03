import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRecover = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = () => {
  return [
    {
      path: '/',
      element: <MinimalLayout />,
      children: [
        {
          path: '/login',
          element: <AuthLogin />
        },
        {
          path: '/authRecover',
          element: <AuthRecover />
        }
      ]
    }
  ];
};

export default LoginRoutes;
