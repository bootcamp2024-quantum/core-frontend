import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROUTES } from './routes';
import Layout from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
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
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
