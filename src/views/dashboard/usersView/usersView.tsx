import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as usersActions from '@/store/entities/users';
import * as usersConstants from '@/utils/constants/users.constants';

import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';
import Table from '@/components/content/table/Table';
import Pagination from '@/components/layout/navigation/pagination/Pagination';

function UsersView() {
  const dispatch = useDispatch();
  const {
    users,
    loading: isLoading,
    page,
    totalPages,
  } = useSelector((state: any) => state.users);

  const navigate = useNavigate();

  function goToUserProfile(user: any) {
    navigate('/dashboard/user-profile/' + user.id, {
      state: user,
    });
  }

  function goToPage(page: number) {
    dispatch(
      usersActions.getUsers({
        reqParams: {
          page,
        },
      })
    );
  }

  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, []);

  return (
    <div id='users-view' className='users-view'>
      <h1 className='h3 mb-3'>Users list</h1>
      <div
        className='content position-relative overflow-auto px-2 mb-3'
        style={{
          minHeight: '300px',
          maxHeight: '390px',
          scrollbarWidth: 'thin',
        }}
      >
        {isLoading && <OverlayedSpinner />}
        <Table
          className='table-striped table-hover align-middle table-sm'
          cols={usersConstants.usersSchema}
          data={users}
          rowOnClick={(e: any, data: any) => {
            if (
              !(
                e.target.isSameNode(
                  e.currentTarget.querySelector('.bi-trash-fill')
                ) ||
                e.target.isSameNode(
                  e.currentTarget.querySelector('.bi-pencil-fill')
                )
              )
            )
              goToUserProfile(data);
          }}
        />
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageItemClick={goToPage}
      />
    </div>
  );
}

export default UsersView;
