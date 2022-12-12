import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { map } from 'lodash';

import Card from '@/components/basic/cards/Card';
import CardHeader from '@/components/basic/cards/CardHeader';
import CardBody from '@/components/basic/cards/CardBody';
import Button from '@/components/basic/button/Button';
import Alert from '@/components/basic/alert/Alert';
import Image from '@/components/content/image/Image';

import * as usersActions from '@/store/entities/users';
import * as generalHelpers from '@/utils/helpers/general.helpers';

import * as userConstants from '@/utils/constants/user.constants';

type UserData = {
  // علت کار عدم اختصاص دادن بررسی شود
  id: string | number;
  email: string;
  avatar: string;
  first_name: string;
  last_name: string;
};

function UserProfileView() {
  const { state }: { state: any } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    id,
    email,
    avatar: profileImgURL,
    first_name,
    last_name,
  }: any = state;

  function delUser(id: number | string) {
    dispatch(
      usersActions.delUser({
        data: {
          id: id,
        },
      })
    );
  }

  return (
    <div id='user-profile-view' className='user-view'>
      <h1 className='fs-4 mb-3'>User Profile</h1>
      <div className='row'>
        <div className='col-md-4 col-xl-3'>
          <Card className='mb-3 border-0 pt-1'>
            <CardHeader className='bg-white border-0'>
              <h2 className='card-title fs-6 fw-bold mb-0 color-939ba2'>
                Profile Details
              </h2>
            </CardHeader>
            <CardBody className='text-center pt-4'>
              <Image
                className='img rounded-circle d-flex justify-content-center mx-auto mb-1'
                src={profileImgURL}
                alt={first_name + '\n' + last_name}
                style={{ width: '128px', height: '128px', fontSize: '12px' }}
              />
              <h3 className='card-title mb-0 fw-bold fs-6 rounded-0 color-939ba2'>
                {first_name + ' ' + last_name}
              </h3>
              <div className='mb-2 fw-bold color-939ba2'>User ID: {id}</div>
              <div>
                <Button
                  className='btn-sm btn-success mx-1 rounded-0'
                  onClickHandler={() => {
                    navigate('/dashboard/user/' + id, {
                      state,
                    });
                  }}
                >
                  <i className='bi bi-pencil-fill text-white'></i>
                </Button>
                <Button
                  className='btn-sm btn-danger mx-1 rounded-0'
                  onClickHandler={() => {
                    delUser(id);
                    navigate('/dashboard');
                  }}
                >
                  <i className='bi bi-trash-fill'></i>
                </Button>
              </div>
            </CardBody>
            <hr className='my-0' />
            <CardBody>
              <h4 className='fs-6 card-title fw-bold color-939ba2 mb-3'>
                Skills
              </h4>
              <Alert type='warning'>
                This User hasn't listed any skills yet!.
                <div className='small'>
                  ( no skills got received from the server. )
                </div>
              </Alert>
            </CardBody>
            <hr className='my-0' />
            <CardBody>
              <h4 className='fs-6 card-title fw-bold color-939ba2 mb-3'>
                About
              </h4>
              <ul className='list-unstyled mb-0'>
                {map(
                  generalHelpers.convertData(
                    state,
                    userConstants.dataConversionMap,
                    'valToKey'
                  ),
                  (val: any, key) => (
                    <li key={key} className='mb-1' style={{ color: '#495057' }}>
                      <span className='fw-bold'>{key}: </span>
                      {val}
                    </li>
                  )
                )}
              </ul>
            </CardBody>
            <hr className='my-0' />
            <CardBody>
              <h4 className='fs-6 card-title fw-bold color-939ba2 mb-3'>
                Elsewhere
              </h4>
              <ul className='list-unstyled mb-0'>
                <li className='mb-1'>
                  <i className='bi bi-envelope-fill text-secondary mx-2' />
                  <span>{email}</span>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className='col-md-8 col-xl-9'>
          <Card className='border-0 pt-1'>
            <CardHeader className='bg-white border-0'>
              <h2 className='fs-6 card-title mb-0 fw-bold color-939ba2'>
                Activities
              </h2>
            </CardHeader>
            <CardBody className='h-100'>
              <Alert type='warning'>
                This User doesn't have any activities yet.
                <div className='small'>
                  ( no activities got recieved from the server. )
                </div>
              </Alert>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UserProfileView;
