import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function PaginatedItems(props: any) {
  const { itemsPerPage, page, totalItems, handlePageClick } = props;
  const [pageCount, setPageCount] = useState(page);

  useEffect(() => {
    setPageCount(Math.floor(totalItems / itemsPerPage));
  }, [totalItems]);

  return (
    <ReactPaginate
      containerClassName='pagination d-flex justify-content-center align-items-center'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextLinkClassName='page-link'
      activeClassName='active'
      previousClassName='page-item rounded-2'
      nextClassName='page-item rounded-2'
      disabledClassName='disabled'
      previousLabel='<<'
      breakLabel='...'
      nextLabel='>>'
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={undefined}
      onPageChange={handlePageClick}
    />
  );
}

export default PaginatedItems;
