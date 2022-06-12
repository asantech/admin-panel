type PaginationBtn = {
  id: string | number;
  className?: string;
  page: number;
  content: any;
  onClick?: any;
};

function PageItem(props: PaginationBtn) {
  const { id, className, page, content, onClick } = props;
  return (
    <li
      key={id}
      className={'page-item' + className}
      onClick={() => onClick(page)}
    >
      <div className='page-link'>{content}</div>
    </li>
  );
}

export default PageItem;
