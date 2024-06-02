import { lazy } from 'react';

import Loadable from 'components/Loadable';

const Main = Loadable(lazy(() => import('pages/main/index')));

const MainRoutes = () => {
  return [
    {
      path: '/main',
      element: <Main />,
      children: [
        {
          path: '/main/face',
          element: <Main />
        }
      ]
    }
  ];
};

export default MainRoutes;
