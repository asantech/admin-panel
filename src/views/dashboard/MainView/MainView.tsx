import EntityInfoCard from '../cards/EntityInfoCard';

import * as usersActions from '@/store/entities/users';
import * as resourcesActions from '@/store/entities/resources';

let loggedInMsgIsShown = false;

function MainView() {
  return (
    <div id='main-view p-5'>
      <div className='container-fluid'>
        <div className='row justify-content-center gx-5'>
          <div className='col-4'>
            <EntityInfoCard
              headerContent={
                <>
                  <i className='bi bi-people-fill'></i> Users Info
                </>
              }
              loadDataAction={usersActions.getUsers}
              itemsKey='users'
            ></EntityInfoCard>
          </div>
          <div className='col-4'>
            <EntityInfoCard
              headerContent={
                <>
                  <i className='bi bi-card-list'></i> Resources Info
                </>
              }
              loadDataAction={resourcesActions.getResources}
              itemsKey='resources'
            ></EntityInfoCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
