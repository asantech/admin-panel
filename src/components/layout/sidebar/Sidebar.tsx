import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Sidebar.module.css';

import Accordion from '@/components/basic/accordion/Accordion';

import * as dashboardConstants from '@/utils/constants/dashboard.constants';

function Sidebar() {
  const email: string = useSelector((state: any) => state.auth.userData.email);

  return (
    <div className={styles['sidebar'] + ' pt-3 px-4 position-fixed'}>
      <div className='sidebar-brand mb-4'>
        <Link to='/dashboard' className='text-decoration-none'>
          <span className='sidebar-brand-text align-middle text-white'>
            <span className='fs-5 fw-bold'>Admin Panel</span>
            <sup>
              <small className='badge bg-primary text-uppercase mx-1'>
                Pro
              </small>
            </sup>
          </span>
        </Link>
      </div>
      <div className='sidebar-user mb-5'>
        <div className='text-white'>{email}</div>
      </div>
      {/* <ul className='nav nav-pills flex-column mb-auto'>
        <li key='nav-items-group-header' className='nav-item mb-2'>
          <div className='color-ced4da mb-2'>Pages</div>
        </li>
        {dashboardConstants.navLinks.map((navLink, i: number) => (
          <li key={i} className='nav-item'>
            <Link to={navLink.path} className='nav-link color-ced4da p-0 mb-3'>
              {navLink.children}
            </Link>
          </li>
        ))}
      </ul> */}
      <Accordion items={dashboardConstants.navLinks}></Accordion>
    </div>
  );
}

export default Sidebar;
