import { Suspense, useEffect } from 'react';
import { Route, RouteProps, Routes, useLocation } from 'react-router-dom';

import { Home } from 'screens/Home';
import { Details } from 'screens/Details';
import { Favorite } from 'screens/Favorites';
import Loading from 'components/Loading';

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
  {
    routename: 'details',
    path: '/details/:heroId',
    element: <Details />,
  },
];

export const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.routename}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
