import Button from 'components/basic/button/Button';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as authActions from 'store/authentication/auth';

import './Navbar.css';

function Navbar(props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOut() {
    dispatch(
      authActions.signOut({
        afterDone: () => {
          navigate('/sign-in');
        },
      })
    );
  }

  return (
    <nav className='top-navbar navbar navbar-light px-3'>
      <div className='container'>
        <Button
          className='navbar-toggler'
          onClickHandler={props.togglerBtnOnClickHandler}
        >
          <span className='navbar-toggler-icon'></span>
        </Button>
        <Button onClickHandler={() => {}} className='ms-auto rounded-circle'>
          <i className='bi bi-bell text-danger'></i>
        </Button>
        <Button onClickHandler={signOut} className='rounded-circle mx-2'>
          <i className='bi bi-box-arrow-right text-danger'></i>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
