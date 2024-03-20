import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main><Outlet /></main>
            <Footer />
        </>
    )
}

export default Layout