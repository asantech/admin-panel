import { Routes, Route } from 'react-router-dom';

import UsersView from '@/views/dashboard/usersView/UsersView';
import UserView from '@/views/dashboard/userView/UserView';
import ResourcesView from '@/views/dashboard/resourcesView/ResourcesView';
import ResourceView from '@/views/dashboard/resourceView/ResourceView';

function DashboardRoutes() {
  return (
    <Routes>
      <Route path='users' element={<UsersView />} />
      <Route path='user/:id' element={<UserView />} />
      <Route path='recources' element={<ResourcesView />} />
      <Route path='resource' element={<ResourceView />} />
    </Routes>
  );
}

export default DashboardRoutes;
