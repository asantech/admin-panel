import Button from '@/components/basic/button/Button';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as authActions from '@/store/authentication/auth';

import './Navbar.css';

function Navbar(props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOut() {
    dispatch(
      authActions.signOut({
        afterDone: () => {
          navigate('/sign-up');
        },
      })
    );
  }

  return (
    <nav className='top-navbar navbar navbar-light px-3'>
      <div className='container-fluid'>
        <Button
          className='navbar-toggler'
          onClickHandler={props.togglerBtnOnClickHandler}
        >
          <span className='navbar-toggler-icon'></span>
        </Button>
        <Button onClickHandler={signOut}>
          <i className='bi bi-box-arrow-right text-danger'></i>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
