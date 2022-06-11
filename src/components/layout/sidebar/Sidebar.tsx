import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

import * as dashboardConstants from '@/utils/constants/dashboard.constants';

function Sidebar() {
  return (
    <div className={styles['sidebar'] + ' pt-3 px-3'}>
      {/* بصورت ورودی داده شود */}
      <ul className='nav nav-pills flex-column mb-auto'>
        {dashboardConstants.navLinks.map(navLink => (
          <li className='nav-item'>
            <Link to={navLink.path} className='nav-link text-white'>
              {navLink.lbl}
            </Link>
          </li>
        ))}

        {/* <li className='nav-item'>
          <a href='#' className='nav-link active' aria-current='page'>
            Home
          </a>
        </li>
        <li>
          <a href='#' className='nav-link text-white'>
            Dashboard
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
