import { Routes, Route } from 'react-router-dom';

import SignUpPage from '@/views/signUp/signUpPage/SignUpPage';
import SignInPage from '@/views/signIn/signInPage/SignInPage';
import DashboardPage from '@/views/dashboard/dashboardPage/DashboardPage';
import NotFoundView from '@/views/errMsgs/notFound/NotFoundView';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/dashboard/*' element={<DashboardPage />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default AppRoutes;
