import { Link } from 'react-router-dom';

export const navLinks = Object.freeze([
  {
    header: (
      <>
        <i className='bi bi-person-circle' />
        <span className='mx-3'>User</span>
      </>
    ),
    body: (
      <>
        <Link to='/dashboard/users' className='nav-link color-ced4da p-0 mb-3'>
          <i className='bi bi-people-fill' />
          <span className='mx-3 color-#e9ecef80'>List</span>
        </Link>
        <Link to='/dashboard/user' className='nav-link color-ced4da p-0 mb-3'>
          <i className='bi bi-person-plus-fill' />
          <span className='mx-3 color-#e9ecef80'>Create New User</span>
        </Link>
      </>
    ),
  },
  {
    header: (
      <>
        <i className='bi bi-list-nested' />
        <span className='mx-3'>Resources</span>
      </>
    ),
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

export const config = Object.freeze({
  loggedInMsgRemovalDelay: 4000,
});
