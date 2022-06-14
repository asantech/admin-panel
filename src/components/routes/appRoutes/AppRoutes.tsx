import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import SignUpPage from '@/views/signUp/signUpPage/SignUpPage';
import SignInPage from '@/views/signIn/signInPage/SignInPage';
import DashboardPage from '@/views/dashboard/dashboardPage/DashboardPage';
import NotFoundView from '@/views/errMsgs/notFound/NotFoundView';

function AppRoutes() {
  const isLoggedIn = useSelector((state: any) => state.auth.userIsLoggedIn);

  const renderComponent = (condition: any, path: string, Component: any) => {
    return condition ? <Navigate to={path} /> : Component;
  };
  return (
    <Routes>
      <Route
        path='/'
        element={renderComponent(!isLoggedIn, '/sign-in', <DashboardPage />)}
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
