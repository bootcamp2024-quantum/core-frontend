import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Spinner from '../Spinner';
import styles from './LayoutFallback.module.css';

const Layout = () => {
  const location = useLocation();

  const pathsWithoutFooter = ['/register', '/login'];

  const shouldRenderFooter = !pathsWithoutFooter.includes(location.pathname);

  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <Spinner
              size={60}
              borderWidth={6}
              containerClassName={styles.SpinnerContainer}
            />
          }
        >
          <Outlet />
        </Suspense>
        <Toaster />
      </main>
      {shouldRenderFooter && <Footer />}
    </>
  );
};

export default Layout;
