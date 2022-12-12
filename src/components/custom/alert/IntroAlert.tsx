import Alert from 'components/basic/alert/Alert';

function IntroAlert() {
  return (
    <Alert type='info' addedClassName='px-3 py-2' styles={{ fontSize: '13px' }}>
      An online Mock Backend API is used. Use the email & password below :-)
      <br />
      Email: <span className='fw-bold'>eve.holt@reqres.in</span> <br />
      Password: <span className='fw-bold'>cityslicka</span>
    </Alert>
  );
}

export default IntroAlert;
