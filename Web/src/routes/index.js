import { useRoutes, Navigate } from 'react-router-dom';

import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import CameraRoutes from './CameraRoutes';

export default function ThemeRoutes() {
  const isAutoToken = JSON.parse(localStorage.getItem('jwtToken'));

  const routes = useRoutes(
    isAutoToken == null
      ? [...CameraRoutes(), ...LoginRoutes(), { path: '/', element: <Navigate to="/" /> }, { path: '*', element: <Navigate to="/" /> }]
      : [
          ...CameraRoutes(),
          ...MainRoutes(),

          { path: '/', element: <Navigate to="/admin" /> },
          { path: '*', element: <Navigate to="/admin" /> }
        ]
  );
  return routes;
}
