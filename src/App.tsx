import { Router, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

import SignUpPage from './views/signUp/signUpPage/SignUpPage';

function App() {
  return (
    <div className='app'>
      <div className='container-fluid p-0'>
        <SignUpPage />
      </div>
    </div>
  );
}

export default App;
