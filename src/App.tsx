import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ROUTES } from './components/routes';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const FormRegistration = lazy(() => import('./pages/RegistrationPage'))
const RoadmapsPage = lazy(() => import('./pages/RoadmapsPage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
            <Route path={ROUTES.ROADMAPS} element={<PrivateRoute><RoadmapsPage /></PrivateRoute>} />
          </Route>
          <Route path={ROUTES.LOGIN} element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path={ROUTES.REGISTER} element={<PublicRoute><FormRegistration /></PublicRoute>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
