import { useLocation } from 'react-router-dom';

function UserView() {
  const location = useLocation();

  return (
    <div className='user-view'>
      <h1 className='h3 mb-2'>User Profile</h1>
      <div className='row'>
        <div className='col-md-4 col-xl-3'>
          <div className='card mb-3'>
            <div className='card-header'>
              <h5 className='card-title mb-0'>Profile Details</h5>
            </div>
            <div className='card-body text-center'>
              <img
                src='img/avatars/avatar-4.jpg'
                alt='Christina Mason'
                className='img-fluid rounded-circle mb-2'
                width='128'
                height='128'
              />
              <h5 className='card-title mb-0'>Christina Mason</h5>
              <div className='text-muted mb-2'>Lead Developer</div>
            </div>
            <hr className='my-0' />
            <div className='card-body'>
              <h5 className='h6 card-title'>Skills</h5>
              <div className='alert alert-warning' role='alert'>
                This User hasn't listed any skills yet!.
                <div className='small'>
                  ( no skills got recieved from the server. )
                </div>
              </div>
            </div>
            <hr className='my-0' />
            <div className='card-body'>
              <h5 className='h6 card-title'>About</h5>
              <ul className='list-unstyled mb-0'>
                <li className='mb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-home feather-sm me-1'
                  >
                    <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
                    <polyline points='9 22 9 12 15 12 15 22'></polyline>
                  </svg>{' '}
                  Lives in <a href='#'>San Francisco, SA</a>
                </li>

                <li className='mb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-briefcase feather-sm me-1'
                  >
                    <rect
                      x='2'
                      y='7'
                      width='20'
                      height='14'
                      rx='2'
                      ry='2'
                    ></rect>
                    <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'></path>
                  </svg>{' '}
                  Works at <a href='#'>GitHub</a>
                </li>
                <li className='mb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-map-pin feather-sm me-1'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>{' '}
                  From <a href='#'>Boston</a>
                </li>
              </ul>
            </div>
            <hr className='my-0' />
            <div className='card-body'>
              <h5 className='h6 card-title'>Elsewhere</h5>
              <div className='alert alert-warning' role='alert'>
                This User hasn't listed any links yet!.
                <div className='small'>
                  ( no links got recieved from the server. )
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-8 col-xl-9'>
          <div className='card'>
            <div className='card-header'>
              <h5 className='card-title mb-0'>Activities</h5>
            </div>
            <div className='card-body h-100'>
              <div className='alert alert-warning' role='alert'>
                This User doesn't have any activities yet.
                <div className='small'>
                  ( no activities got recieved from the server. )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserView;
