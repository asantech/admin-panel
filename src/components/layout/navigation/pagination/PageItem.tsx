type PaginationBtn = {
  key: string | number;
  className?: string;
  page: number | string;
  content: any;
  onClick?: any;
};

function PageItem(props: PaginationBtn) {
  const { key, className, page, content, onClick } = props;
  return (
    <li
      key={key}
      className={'page-item' + className}
      onClick={() => onClick(page)}
    >
      <div className='page-link'>{content}</div>
    </li>
  );
}

export default PageItem;
