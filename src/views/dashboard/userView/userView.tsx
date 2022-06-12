import { useLocation } from 'react-router-dom';

import Card from '@/components/cards/Card';
import CardHeader from '@/components/cards/CardHeader';
import CardBody from '@/components/cards/CardBody';
import Button from '@/components/basic/button/Button';
import Alert from '@/components/basic/Alert/Alert';
import Image from '@/components/content/image/Image';

function UserView() {
  const location = useLocation();

  const {
    id,
    email,
    avatar: profileImgURL,
    first_name,
    last_name,
  }: any = location.state;

  return (
    <div className='user-view'>
      <h1 className='fs-4 mb-3'>User Profile</h1>
      <div className='row'>
        <div className='col-md-4 col-xl-3'>
          <Card className='mb-3 border-0'>
            <CardHeader className='bg-white border-0'>
              <h2 className='fs-6 fw-bold card-title mb-0 color-939ba2'>
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
              <h3 className='card-title mb-0 fs-6 rounded-0 color-939ba2'>
                {first_name + ' ' + last_name}
              </h3>
              <div className='mb-2 fw-bold color-939ba2'>{id}</div>
              <div>
                <Button className='btn-sm btn-success mx-1 rounded-0'>
                  <i className='bi bi-pencil-fill'></i>
                </Button>
                <Button className='btn-sm btn-danger mx-1 rounded-0'>
                  <i className='bi bi-trash-fill'></i>
                </Button>
              </div>
            </CardBody>
            <hr className='my-0' />
            <CardBody>
              <h5 className='fs-6 card-title fw-bold color-939ba2'>Skills</h5>
              <Alert type='warning'>
                This User hasn't listed any skills yet!.
                <div className='small'>
                  ( no skills got recieved from the server. )
                </div>
              </Alert>
            </CardBody>
            <hr className='my-0' />
            <CardBody>
              <h5 className='fs-6 card-title fw-bold color-939ba2'>About</h5>
              <Alert type='warning'>
                This User hasn't provided any info yet!.
                <div className='small'>
                  ( no user information got recieved from the server. )
                </div>
              </Alert>
            </CardBody>
            <hr className='my-0' />
            <CardBody>
              <h5 className='fs-6 card-title fw-bold color-939ba2'>
                Elsewhere
              </h5>
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
          <Card className='border-0'>
            <CardHeader className='bg-white border-0'>
              <h5 className='fs-6 card-title mb-0 fw-bold color-939ba2'>
                Activities
              </h5>
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

export default UserView;
