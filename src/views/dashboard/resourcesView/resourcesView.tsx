import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import * as resourcesActions from '@/store/entities/resources';
import * as resourcesConstants from '@/utils/constants/resources.constants';

import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';
import Table from '@/components/content/table/Table';
import Pagination from '@/components/layout/navigation/Pagination/PaginatedItems';

import './ResourcesView.css';

function ResourcesView() {
  const dispatch = useDispatch();
  const {
    resources,
    loading: isLoading,
    page,
    totalPages,
  } = useSelector((state: any) => state.resources);

  const navigate = useNavigate();

  function goToReourceInfoPage(resource: any) {
    navigate('/dashboard/resource/' + resource.id, {
      state: resource,
    });
  }

  function goToPage(page: number) {
    dispatch(
      resourcesActions.getResources({
        reqParams: {
          page,
        },
      })
    );
  }

  useEffect(() => {
    if (isEmpty(resources)) dispatch(resourcesActions.getResources());
  }, []);

  return (
    <div id='resources-view' className='resource-view'>
      <h1 className='h3 mb-3'>Resources</h1>
      <div className='table-content-segment content position-relative overflow-auto px-2 mb-3'>
        {isLoading && <OverlayedSpinner />}
        <Table
          className='table-striped table-hover align-middle'
          cols={resourcesConstants.resourcesSchema}
          data={resources}
          rowOnClick={(e: any, data: any) => goToReourceInfoPage(data)}
        />
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageItemClick={goToPage}
      />
    </div>
  );
}

export default ResourcesView;
