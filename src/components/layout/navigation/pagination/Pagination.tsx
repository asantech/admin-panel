import { range } from 'lodash';

import PaginationBtn from './PaginationBtn';

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
        <PaginationBtn
          id='prev-page-btn'
          className={currentPage === 1 ? ' disabled pe-none' : ''}
          page={1}
          content={<span aria-hidden='true'>&laquo;</span>}
          onClick={() => onPageItemClick(currentPage - 1)}
        />
        {range(1, totalPages + 1).map(page => (
          <PaginationBtn
            id={page}
            className={currentPage === page ? ' active' : ''}
            page={page}
            content={page}
            onClick={() => onPageItemClick(page)}
          />
        ))}
        <PaginationBtn
          id='next-page-btn'
          className={currentPage === totalPages ? ' disabled pe-none' : ''}
          page={totalPages}
          content={<span aria-hidden='true'>&raquo;</span>}
          onClick={() => onPageItemClick(currentPage + 1)}
        />
      </ul>
    </nav>
  );
}

export default Pagination;
