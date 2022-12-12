import { useState } from 'react';

import Sidebar from 'components/layout/sidebar/Sidebar';
import Navbar from 'components/layout/navigation/navbar/Navbar';
import DashboardRoutes from 'components/routing/dashboardRoute/DashboardRoutes';

import Footer from 'components/layout/footer/Footer';

import './DashboardPage.css';

function DashboardPage() {
  const [sidebarShow, setSidebarShow] = useState(true);

  return (
    <div id='dashboard-page' className='dashboard-page'>
      <div className='container-fluid p-0'>
        <div className='row gx-0 p-0 h-100 overflow-hidden'>
          <div
            className={'col-2 p-0' + (sidebarShow ? '' : ' visually-hidden')}
          >
            <Sidebar />
          </div>
          <div
            className={
              'p-0 overflow-y-auto' + (sidebarShow ? ' col-10' : 'col-12')
            }
          >
            <Navbar
              togglerBtnOnClickHandler={() => setSidebarShow(!sidebarShow)}
            />
            <main className='p-5 '>
              <DashboardRoutes />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
