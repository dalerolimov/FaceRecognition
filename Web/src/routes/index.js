import { useRoutes, Navigate } from 'react-router-dom';

import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import CameraRoutes from './CameraRoutes';
import Main from './main';

export default function ThemeRoutes() {
  const isAutoToken = JSON.parse(localStorage.getItem('jwtToken'));

  const routes = useRoutes(
    isAutoToken == null
      ? [
          ...CameraRoutes(),
          ...LoginRoutes(),
          ...Main(),
          { path: '/', element: <Navigate to="/" /> },
          { path: '*', element: <Navigate to="/" /> }
        ]
      : [
          ...CameraRoutes(),
          ...MainRoutes(),
          ...Main(),

          { path: '/', element: <Navigate to="/admin" /> },
          { path: '*', element: <Navigate to="/admin" /> }
        ]
  );
  return routes;
}
