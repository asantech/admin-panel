import { range } from 'lodash';

import PageItem from './PageItem';

type PaginationData = {
  page: number;
  totalPages: number;
  onPageItemClick: any;
};

function Pagination(props: PaginationData) {
  const { page: currentPage, totalPages, onPageItemClick } = props;

  return (
    <nav
      className='d-flex justify-content-center'
      aria-label='Page navigation example'
    >
      <ul className='pagination'>
        <li
          key='prev-page-btn'
          className={'page-item' + (currentPage === 1 ? ' disabled' : '')}
          onClick={() => onPageItemClick(currentPage - 1)}
        >
          <div className='page-link'>
            <span aria-hidden='true'>&laquo;</span>
          </div>
        </li>
        {range(1, totalPages + 1).map(page => (
          <li
            key={page}
            className={'page-item' + (currentPage === page ? ' active' : '')}
            onClick={() => onPageItemClick(page)}
          >
            <div className='page-link'>{page}</div>
          </li>
        ))}
        <li
          key='next-page-btn'
          className={
            'page-item' + (currentPage === totalPages ? ' disabled' : '')
          }
          onClick={() => onPageItemClick(currentPage + 1)}
        >
          <div className='page-link'>
            <span aria-hidden='true'>&raquo;</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
