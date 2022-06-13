import EntityInfoCard from '../cards/EntityInfoCard';

import * as usersActions from '@/store/entities/users';
import * as resourcesActions from '@/store/entities/resources';

function MainView() {
  return (
    <div id='main-view p-5'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-4'>
            <EntityInfoCard
              headerContent='Users Info'
              loadDataAction={usersActions.getUsers}
              itemsKey='users'
              bgColor='bg-info '
            ></EntityInfoCard>
          </div>
          <div className='col-4'>
            <EntityInfoCard
              headerContent='Resources Info'
              loadDataAction={resourcesActions.getResources}
              itemsKey='resources'
              bgColor='bg-success '
            ></EntityInfoCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
