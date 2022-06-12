import Sidebar from '@/components/layout/sidebar/Sidebar';
import Navbar from '@/components/layout/navigation/navbar/Navbar';
import DashboardRoutes from '@/components/routes/appRoutes/DashboardRoutes';

import Footer from '@/components/layout/footer/Footer';

import './DashboardPage.css';

function DashboardPage() {
  return (
    <div id='dashboard-page' className='dashboard-page'>
      <div className='container-fluid p-0'>
        <div className='row gx-0 p-0 h-100 overflow-hidden'>
          <div className='col-2 p-0'>
            <Sidebar />
          </div>
          <div className='col-10 p-0 overflow-y-auto'>
            <Navbar />
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
