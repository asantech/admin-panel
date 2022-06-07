import Sidebar from '../../../components/layout/sidebar/Sidebar';
import Navbar from '../../../components/layout/navigation/navbar/Navbar';

import styles from './Dashboard.module.css';

function DashboardPage() {
  return (
    <div className='dashboard-page'>
      <div className='container-fluid p-0'>
        <div className={styles['dashboard-main-row'] + ' row gx-0 p-0'}>
          <div className='col-2 p-0'>
            <Sidebar />
          </div>
          <div className='col-10 p-0'>
            <Navbar />
            <main>dashboard page</main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
