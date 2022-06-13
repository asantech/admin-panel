import { Routes, Route } from 'react-router-dom';

import MainView from '@/views/dashboard/MainView/MainView';
import UsersView from '@/views/dashboard/usersView/UsersView';
import UserProfileView from '@/views/dashboard/userProfileView/UserProfileView';
import ResourcesView from '@/views/dashboard/resourcesView/ResourcesView';
import ResourceView from '@/views/dashboard/resourceView/ResourceView';
import UserView from '@/views/dashboard/userView/UserView';

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
    </Routes>
  );
}

export default DashboardRoutes;
