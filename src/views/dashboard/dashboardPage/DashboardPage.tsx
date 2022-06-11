import Sidebar from '@/components/layout/sidebar/Sidebar';
import Navbar from '@/components/layout/navigation/navbar/Navbar';
import DashboardRoutes from '@/components/routes/appRoutes/DashboardRoutes';

function DashboardPage() {
  return (
    <div className='dashboard-page'>
      <div className='container-fluid p-0'>
        <div className='row gx-0 p-0 h-100'>
          <div className='col-2 p-0'>
            <Sidebar />
          </div>
          <div className='col-10 p-0'>
            <Navbar />
            <main className='p-5' style={{ height: 'calc(100vh - 56px)' }}>
              <DashboardRoutes />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
