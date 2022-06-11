import apiConstants from '@/utils/constants/api.constants';

import Image from '@/components/content/image/Image';

export const apiConfig = Object.freeze({
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
        style={{ width: '90px', height: '90px', fontSize: '12px' }} // بعدا اصلاح شود
      />
    ),
  },
  { path: 'first_name', lbl: 'First Name' },
  { path: 'last_name', lbl: 'Last Name' },
  {
    path: 'actions',
    content: () => (
      <>
        <i className='bi bi-pencil-fill text-success mx-2'></i>
        <i className='bi bi-trash-fill text-danger'></i>
      </>
    ),
  },
]);
