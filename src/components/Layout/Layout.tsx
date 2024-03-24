import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  const location = useLocation();

  const pathsWithoutFooter = ['/register', '/login'];

  const shouldRenderFooter = !pathsWithoutFooter.includes(location.pathname);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {shouldRenderFooter && <Footer />}
    </>
  );
};

export default Layout;
