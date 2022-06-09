import { useEffect } from 'react';
import Form from '@/components/forms/form/Form';
import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';

import * as signUpConstants from '@/utils/constants/signUp.constants';

import './SignUpPage.css';

function SignUpPage() {
  useEffect(() => {}, []);
  return (
    <div className='sign-up-page p-5 vh-100'>
      <div className='row justify-content-md-center'>
        <div className='col-5'>
          <h1 className='h4 mb-4 mx-auto' style={{ width: 'max-content' }}>
            Sign Up in the admin panel
          </h1>
          <div className='card pt-4 px-3 pb-4' style={{ maxWidth: '576px' }}>
            {/* <OverlayedSpinner /> */}
            <Form items={signUpConstants.items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
