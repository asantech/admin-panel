import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles['sidebar']}>
      <ul className='nav nav-pills flex-column mb-auto'>
        <li className='nav-item'>
          <a href='#' className='nav-link active' aria-current='page'>
            Home
          </a>
        </li>
        <li>
          <a href='#' className='nav-link text-white'>
            Dashboard
          </a>
        </li>
        <li>
          <a href='#' className='nav-link text-white'>
            Orders
          </a>
        </li>
        <li>
          <a href='#' className='nav-link text-white'>
            Products
          </a>
        </li>
        <li>
          <a href='#' className='nav-link text-white'>
            Customers
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
