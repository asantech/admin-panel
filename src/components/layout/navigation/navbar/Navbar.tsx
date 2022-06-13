import Button from '@/components/basic/button/Button';

import './Navbar.css';

function Navbar(props: any) {
  return (
    <nav className='top-navbar navbar navbar-light px-3'>
      <div className='container-fluid'>
        <Button
          className='navbar-toggler'
          onClickHandler={props.togglerBtnOnClickHandler}
        >
          <span className='navbar-toggler-icon'></span>
        </Button>
        <Button>
          <i className='bi bi-box-arrow-right text-danger'></i>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
