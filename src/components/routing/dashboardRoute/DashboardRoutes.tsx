import { Routes, Route } from 'react-router-dom';

import MainView from 'views/dashboard/MainView/MainView';
import UsersView from 'views/dashboard/UsersView/UsersView';
import UserProfileView from 'views/dashboard/UserProfileView/UserProfileView';
import ResourcesView from 'views/dashboard/ResourcesView/ResourcesView';
import ResourceView from 'views/dashboard/ResourceView/ResourceView';
import UserView from 'views/dashboard/UserView/UserView';
import NotFoundView from 'views/errMsgs/NotFound/NotFoundView';

function DashboardRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainView />} />
      <Route path='users' element={<UsersView />} />
      <Route path='user-profile/:id' element={<UserProfileView />} />
      <Route path='resources' element={<ResourcesView />} />
      <Route path='resource/:id' element={<ResourceView />} />
      <Route path='user/:id' element={<UserView />} />
      <Route path='user/' element={<UserView />} />
      <Route
        path='*'
        element={<NotFoundView msg='404 error, view not found.' />}
      />
    </Routes>
  );
}

export default DashboardRoutes;
