import { Route, RouteProps, Routes } from 'react-router-dom';

import { Favorite } from 'screens/Favorites';
import { Home } from 'screens/Home';

type RoutesObject = {
  routename: string;
} & RouteProps;

const routes: RoutesObject[] = [
  {
    routename: 'home',
    path: '/',
    element: <Home />,
  },
  {
    routename: 'favorite',
    path: '/favorites',
    element: <Favorite />,
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route
          key={route.routename}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};
