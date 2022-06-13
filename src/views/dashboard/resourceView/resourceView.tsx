import { useLocation } from 'react-router-dom';
import { map } from 'lodash';

import Card from '@/components/cards/Card';
import CardBody from '@/components/cards/CardBody';

function ResourceView() {
  const location = useLocation();

  const { state }: any = location;

  return (
    <div id='resource-view' className='user-view'>
      <h1 className='fs-4 mb-3'>Resource Info</h1>
      <div className='row'>
        <div className='col-md-10 col-xl-8 mx-auto'>
          <Card className='px-5 py-4 h-100'>
            <CardBody>
              <h2 className='fs-3 mb-4'>Details :</h2>
              <ul className='list-unstyled'>
                {map(state, (val: string, key: string) => (
                  <li key={key} className='mb-2'>
                    <span className='fw-bold'>{key} :</span>
                    <span className='mx-2'>{val}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ResourceView;
