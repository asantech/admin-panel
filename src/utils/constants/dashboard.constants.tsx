import { Link } from 'react-router-dom';

export const navLinks = Object.freeze([
  {
    header: 'User',
    body: (
      <>
        <Link to='/dashboard/users' className='nav-link color-ced4da p-0 mb-3'>
          <i className='bi bi-people-fill'></i>
          <span className='mx-3 color-#e9ecef80'>List</span>
        </Link>
        <Link to='/dashboard/user' className='nav-link color-ced4da p-0 mb-3'>
          <i className='bi bi-person-plus-fill'></i>
          <span className='mx-3 color-#e9ecef80'>Create New User</span>
        </Link>
      </>
    ),
  },
  {
    header: 'Resources',
    body: (
      <Link
        to='/dashboard/resources'
        className='nav-link color-ced4da p-0 mb-3'
      >
        <i className='bi bi-card-list'></i>
        <span className='mx-3 color-#e9ecef80'>List</span>
      </Link>
    ),
  },
]);
