import { useSelector, useDispatch } from 'react-redux';

import { useNavigate, Link } from 'react-router-dom';

import Form from '@/components/forms/form/Form';
import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';

import Card from '@/components/cards/Card';
import CardBody from '@/components/cards/CardBody';

import * as signInConstants from '@/utils/constants/signIn.constants';
import * as authSlice from '@/store/authentication/auth';

import './SignInPage.css';

function SignInPage() {
  const showSpinner = useSelector((state: any) => state.auth.loading);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function onHandleSubmitForm({ itemsVals, resetForm }: any) {
    dispatch(
      authSlice.signIn({
        data: itemsVals,
        afterSuccess: () => {
          resetForm();
          navigate('/dashboard');
        },
      })
    );
  }

  return (
    <div id='sign-in-page' className='sign-in-page p-5 vh-100'>
      <Link
        to='/sign-up'
        className='position-absolute'
        style={{ top: '30px', right: '50px' }}
      >
        <i className='bi bi-person-plus-fill fs-1 text-primary'></i>
      </Link>
      <div className='row justify-content-md-center'>
        <div className='col-5'>
          <h1 className='h4 mb-4 mx-auto' style={{ width: 'max-content' }}>
            Sign In to the admin panel
          </h1>
          <Card className='pt-4 px-3 pb-4 position-relative max-width-576px'>
            <CardBody>
              {showSpinner && <OverlayedSpinner />}
              <Form
                items={signInConstants.items}
                onHandleSubmit={onHandleSubmitForm}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
