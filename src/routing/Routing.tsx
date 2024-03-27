import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { ROUTES } from './routes';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(
  () => import('../pages/RegistrationPage/RegistrationPage'),
);
const EditProfilePage = lazy(
  () => import('../pages/EditProfilePage/EditProfilePage'),
);
const RoadmapsPage = lazy(() => import('../pages/RoadmapsPage'));
const AboutUsPage = lazy(() => import('../pages/AboutUsPage'));

const Routing = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
        <Route
          path={ROUTES.ROADMAPS}
          element={
            <PrivateRoute>
              <RoadmapsPage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.REGISTER}
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path={ROUTES.PROFILE}
          element={
            <PublicRoute>
              <EditProfilePage />
            </PublicRoute>
          }
        />
      </Route>,
    ),
  );
};

export default Routing;
