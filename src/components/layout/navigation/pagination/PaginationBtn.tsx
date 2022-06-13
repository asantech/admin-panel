type PaginationBtn = {
  className?: string;
  page: number;
  content: any;
  onClick?: any;
};

function PageItem(props: PaginationBtn) {
  const { className, page, content, onClick } = props;
  return (
    <li
      className={'page-item' + className}
      onClick={() => onClick(page)}
      role='button'
    >
      <div className='page-link'>{content}</div>
    </li>
  );
}

export default PageItem;
