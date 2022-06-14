import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import Form from '@/components/forms/form/Form';
import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';
import Image from '@/components/content/image/Image';

import * as userConstants from '@/utils/constants/user.constants';
import * as userSlice from '@/store/entities/users';
import * as generalHelpers from '@/utils/helpers/general.helpers';

function UserView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loading: showSpinner } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const { state }: { state: any } = location;
  let userData = state
    ? generalHelpers.convertData(
        state,
        userConstants.dataConversionMap,
        'valToKey'
      )
    : undefined;

  userData &&
    (userData = generalHelpers.addKeyValsIfDoesntExist(userData, { job: '' }));

  function onHandleSubmitForm({ itemsVals, resetForm }: any) {
    const convertedItemsVals = generalHelpers.convertData(
      itemsVals,
      userConstants.dataConversionMap
    );

    dispatch(
      !state
        ? userSlice.addUser({
            data: convertedItemsVals,
            afterSuccess: () => {
              resetForm();
              // navigate('/dashboard/users');
            },
          })
        : userSlice.editUser({
            data: convertedItemsVals,
            afterSuccess: () => {
              resetForm();
              // navigate('/dashboard/users');
            },
          })
    );
  }

  return (
    <div id='user-view' className='user-view pt-0 px-5 pb-3 h-100'>
      <div className='row justify-content-md-center'>
        <div className='col-6'>
          <h1 className='h4 mb-4 mx-auto' style={{ width: 'max-content' }}>
            {(!state ? 'Add ' : 'Edit') + ' User'}
          </h1>
          <div
            className='card py-3 px-3 position-relative'
            style={{ maxWidth: '536px' }} // بعدا اصلاح شود
          >
            {showSpinner && <OverlayedSpinner />}
            {state && (
              <Image
                className='img-thumbnail mx-auto rounded-circle'
                src={userData.avatar}
                alt={userData.first_name + ' \n' + userData.last_name}
                style={{ width: '70px', height: '70px' }}
              />
            )}
            <Form
              items={userConstants.userFormControls}
              onHandleSubmit={onHandleSubmitForm}
              itemsVals={userData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserView;
