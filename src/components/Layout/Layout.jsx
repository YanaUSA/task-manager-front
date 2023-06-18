import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <div>
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};
