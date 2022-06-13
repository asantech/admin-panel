import apiConstants from '@/utils/constants/api.constants';
import * as usersActions from '@/store/entities/users';

import { Link } from 'react-router-dom';

import Image from '@/components/content/image/Image';

export const baseAPIConfig = Object.freeze({
  baseURL: apiConstants.baseURL,
  url: apiConstants.urls.users,
  method: 'get',
});

export const usersSchema = Object.freeze([
  { path: 'id', lbl: 'Id' },
  { path: 'email', lbl: 'Email' },
  {
    path: 'avatar',
    lbl: 'Profile Image',
    content: (data: any) => (
      <Image
        className='img-thumbnail rounded-circle d-flex justify-content-center'
        src={data.avatar}
        alt={data.first_name + '\n' + data.last_name}
        style={{ width: '70px', height: '70px', fontSize: '10px' }} // بعدا اصلاح شود
      />
    ),
  },
  { path: 'first_name', lbl: 'First Name' },
  { path: 'last_name', lbl: 'Last Name' },
  {
    path: 'actions',
    content: (data: any, i: number, dispatch: any) => (
      <>
        <Link to={'/dashboard/user/' + data.id} state={data}>
          <i className='bi bi-pencil-fill text-success mx-2'></i>
        </Link>
        <i
          className='bi bi-trash-fill text-danger'
          onClick={() => {
            dispatch(
              usersActions.delUser({
                data: {
                  id: data.id,
                },
              })
            );
          }}
        ></i>
      </>
    ),
  },
]);
