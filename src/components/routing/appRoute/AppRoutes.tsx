import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import SignUpPage from 'views/signUp/SignUpPage/SignUpPage';
import SignInPage from 'views/signIn/SignInPage/SignInPage';
import DashboardPage from 'views/dashboard/DashboardPage/DashboardPage';
import NotFoundView from 'views/errMsgs/NotFound/NotFoundView';

function AppRoutes() {
  const isLoggedIn = useSelector((state: any) => state.auth.userIsLoggedIn);

  const renderComponent = (
    condition: boolean,
    path: string,
    Component: any
  ) => {
    return condition ? <Navigate to={path} /> : Component;
  };
  return (
    <Routes>
      <Route
        path='/'
        element={renderComponent(
          !isLoggedIn,
          '/sign-in',
          <Navigate to='/dashboard' />
        )}
      />
      <Route
        path='/sign-up'
        element={renderComponent(isLoggedIn, '/dashboard', <SignUpPage />)}
      />
      <Route
        path='/sign-in'
        element={renderComponent(isLoggedIn, '/dashboard', <SignInPage />)}
      />
      <Route
        path='/dashboard/*'
        element={renderComponent(!isLoggedIn, '/sign-in', <DashboardPage />)}
      />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default AppRoutes;
