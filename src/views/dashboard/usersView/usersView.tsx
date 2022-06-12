import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from '@/store/index';

import * as usersActions from '@/store/users/users';
import * as usersConstants from '@/utils/constants/users.constants';

import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';
import Table from '@/components/content/table/Table';
import Pagination from '@/components/layout/navigation/pagination/Pagination';

function UsersView() {
  const dispatch = useDispatch();
  const { users, page, totalPages } = useSelector(
    state => store.getState().users
  );
  const isLoading = useSelector(state => store.getState().users.loading); // بررسی شود
  const navigate = useNavigate();

  function goToUserProfile(user: any) {
    navigate('/dashboard/user/' + user.id, {
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
    <div className='users-view'>
      <h1 className='h3 mb-3'>Users list</h1>
      <div
        className='content position-relative overflow-auto px-2 mb-3'
        style={{
          height: '390px',
          scrollbarWidth: 'thin',
        }}
      >
        {isLoading && <OverlayedSpinner />}
        <Table
          className='table-striped table-hover align-middle table-sm'
          cols={usersConstants.usersSchema}
          data={users}
          rowOnClick={(data: any) => goToUserProfile(data)}
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
