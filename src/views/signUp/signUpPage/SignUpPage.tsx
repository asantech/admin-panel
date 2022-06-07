import Form from '../../../components/forms/form/Form';

import * as signUpConstants from '../../../utils/constants/signUp.constants';

function SignUpPage() {
  return (
    <div className='sign-up-page'>
      Sign Up Page
      <Form items={signUpConstants.items} />
    </div>
  );
}

export default SignUpPage;
