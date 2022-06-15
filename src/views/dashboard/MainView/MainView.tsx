import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import EntityInfoCard from '../cards/EntityInfoCard';

import * as usersActions from '@/store/entities/users';
import * as resourcesActions from '@/store/entities/resources';

import msgsConstants from '@/utils/constants/msgs.constants';
import * as dashboardConstants from '@/utils/constants/dashboard.constants';

import Alert from '@/components/basic/alert/Alert';

function MainView() {
  const loggedInMsgDisplay = useSelector(
    (state: any) => state.auth.loggedInMsgDisplay
  );
  const [showLoggedInMsg, setShowLoggedInMsg] = useState(loggedInMsgDisplay);

  useEffect(() => {
    if (showLoggedInMsg === true) {
      setTimeout(() => {
        setShowLoggedInMsg(false);
      }, dashboardConstants.config.loggedInMsgRemovalDelay);
    }
  }, [showLoggedInMsg]);

  return (
    <div id='main-view p-5'>
      <div className='container-fluid'>
        <div className='row justify-content-center gx-5 mb-5'>
          <div className='col-4'>
            <EntityInfoCard
              headerContent={
                <>
                  <i className='bi bi-people-fill' /> Users Info
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
                  <i className='bi bi-card-list' /> Resources Info
                </>
              }
              loadDataAction={resourcesActions.getResources}
              itemsKey='resources'
            ></EntityInfoCard>
          </div>
        </div>
        {showLoggedInMsg === true && (
          <div className='row justify-content-center'>
            <div className='col-8'>
              <Alert type='success'>
                {msgsConstants.auth.signInSuccessMsg}
              </Alert>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainView;
