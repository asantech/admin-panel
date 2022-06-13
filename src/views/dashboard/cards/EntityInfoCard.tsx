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
    <Card className={'shadow ' + (props.bgColor ?? '')}>
      <CardHeader className={'border-0 ' + (props.bgColor ?? '')}>
        <span className='fs-5 fw-bold'>{props.headerContent} : </span>
      </CardHeader>
      <CardBody className='p-3'>Total: {totalItems}</CardBody>
    </Card>
  );
}

export default EntityInfoCard;
