function CardHeader(props: any) {
  const { className, children } = props;
  return <div className={'card-header ' + (className ?? '')}>{children}</div>;
}

export default CardHeader;
