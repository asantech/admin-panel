export const navLinks = Object.freeze([
  {
    path: '/dashboard',
    children: (
      <>
        <i className='bi bi-grid-1x2'></i>
        <span className='mx-3'>Main</span>
      </>
    ),
  },
  {
    path: '/dashboard/users',
    children: (
      <>
        <i className='bi bi-people-fill'></i>
        <span className='mx-3'>Users</span>
      </>
    ),
  },
  {
    path: '/dashboard/resources',
    children: (
      <>
        <i className='bi bi-card-list'></i>
        <span className='mx-3'>Resources</span>
      </>
    ),
  },
  {
    path: '/dashboard/user',
    children: (
      <>
        <i className='bi bi-person-plus-fill'></i>
        <span className='mx-3'>Add User</span>
      </>
    ),
  },
]);
