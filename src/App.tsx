import { BrowserRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import * as authService from '@/services/Auth/Auth.service';
import * as authActions from '@/store/authentication/auth';
import * as storageService from '@/services/Storage/Storage.service';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import AppRoutes from '@/components/routing/appRoute/AppRoutes';

function App() {
  const dispatch = useDispatch();
  if (authService.isLoggedIn()) {
    dispatch(
      authActions.setSignedIn({
        userData: {
          email: storageService.getItem('email'),
        },
        token: storageService.getItem('token'),
      })
    );
  }

  return (
    <div className='app'>
      <div className='container-fluid p-0'>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
