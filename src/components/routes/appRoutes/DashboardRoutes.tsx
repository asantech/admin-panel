import { Routes, Route } from 'react-router-dom';

import UsersView from '@/views/dashboard/usersView/usersView';
import UserView from '@/views/dashboard/userView/userView';
import ResourcesView from '@/views/dashboard/resourcesView/resourcesView';
import ResourceView from '@/views/dashboard/resourceView/resourceView';

function DashboardRoutes() {
  return (
    <Routes>
      <Route path='users' element={<UsersView />} />
      <Route path='user' element={<UserView />} />
      <Route path='recources' element={<ResourcesView />} />
      <Route path='resource' element={<ResourceView />} />
    </Routes>
  );
}

export default DashboardRoutes;
