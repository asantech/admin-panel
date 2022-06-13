import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { has } from 'lodash';

import store from '@/store/index';

import Form from '@/components/forms/form/Form';
import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';

import * as userConstants from '@/utils/constants/user.constants';
import * as userSlice from '@/store/entities/users';
import * as generalHelpers from '@/utils/helpers/general.helpers';

function UserView() {
  const location = useLocation();
  const { loading: showSpinner } = useSelector(state => store.getState().users);
  const dispatch = useDispatch();
  const { state } = location;
  let userData = state
    ? generalHelpers.convertData(
        location.state,
        userConstants.dataConversionMap,
        'valToKey'
      )
    : undefined;

  if (userData && !has(userData, 'job')) userData = { ...userData, job: '' };

  function onHandleSubmitForm({ itemsVals, resetForm }: any) {
    dispatch(
      userSlice.addUser({
        data: generalHelpers.convertData(
          itemsVals,
          userConstants.dataConversionMap
        ),
        afterSuccess: () => {
          resetForm();
          // navigate('/dashboard');
        },
      })
    );
  }

  return (
    <div id='user-view' className='user-view p-5 h-100'>
      <div className='row justify-content-md-center'>
        <div className='col-6'>
          <h1 className='h4 mb-4 mx-auto' style={{ width: 'max-content' }}>
            {(!state ? 'Add ' : 'Edit') + ' User'}
          </h1>
          <div
            className='card pt-4 px-3 pb-4 position-relative'
            style={{ maxWidth: '576px' }} // بعدا اصلاح شود
          >
            {showSpinner && <OverlayedSpinner />}
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
