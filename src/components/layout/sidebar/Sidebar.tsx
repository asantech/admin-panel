import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

import * as dashboardConstants from '@/utils/constants/dashboard.constants';

function Sidebar() {
  return (
    <div className={styles['sidebar'] + ' pt-3 px-4 position-fixed'}>
      <div className='sidebar-brand mb-4'>
        <span className='sidebar-brand-text align-middle text-white'>
          <b>Admin Panel</b>
          <sup>
            <small className='badge bg-primary text-uppercase mx-1'>Pro</small>
          </sup>
        </span>
      </div>
      {/* بصورت ورودی داده شود */}
      <ul className='nav nav-pills flex-column mb-auto'>
        <li key='nav-items-group-header' className='nav-item mb-2'>
          <small className='text-white'>Pages</small>
        </li>
        {dashboardConstants.navLinks.map((navLink, i: number) => (
          <li key={i} className='nav-item'>
            <Link to={navLink.path} className='nav-link text-white p-0 mb-3'>
              {navLink.lbl}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
