import Alert from '@/components/basic/Alert/Alert';

type Props = {
  msg?: string;
};

function NotFoundView(props: Props) {
  return (
    <div className='not-found-view p-5'>
      <Alert type='danger'>
        <p className='fw-bold'>{props.msg ?? '404 error, page not found.'}</p>
      </Alert>
    </div>
  );
}

export default NotFoundView;
