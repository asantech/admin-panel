import Alert from '@/components/basic/Alert/Alert';

function NotFoundView() {
  return (
    <div className='not-found-view p-5'>
      <Alert type='danger'>
        <p className='fw-bold'>404 error, page not found.</p>
      </Alert>
    </div>
  );
}

export default NotFoundView;
