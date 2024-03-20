import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import RoadmapsPage from './pages/RoadmapsPage';
import AboutUsPage from './pages/AboutUsPage';
import { ROUTES } from './components/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegistrationPage />} />
            <Route path={ROUTES.ROADMAPS} element={<RoadmapsPage />} />
            <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
