import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '@/components/cards/Card';
import CardHeader from '@/components/cards/CardHeader';
import CardBody from '@/components/cards/CardBody';

function EntityInfoCard(props: any) {
  const dispatch = useDispatch();
  const { [props.itemsKey]: items, total: totalItems } = useSelector(
    (state: any) => state[props.itemsKey]
  );

  useEffect(() => {
    dispatch(props.loadDataAction());
  }, []);

  return (
    <Card className='shadow'>
      <CardHeader className='border-0 bg-white'>
        <span className='fs-6 fw-bold color-939ba2'>
          {props.headerContent} :{' '}
        </span>
      </CardHeader>
      <CardBody className='pt-4 px-3 pb-3'>Total: {totalItems}</CardBody>
    </Card>
  );
}

export default EntityInfoCard;
