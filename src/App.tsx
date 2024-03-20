import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ROUTES } from './components/routes';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from './pages/RegistrationPage';
import RoadmapsPage from './pages/RoadmapsPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const App: React.FC = () => {
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
          <Route path={ROUTES.REGISTER} element={<PublicRoute restricted={true}><RegistrationPage /></PublicRoute>} />    
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
