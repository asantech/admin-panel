function CardBody(props: any) {
  const { className, children } = props;
  return <div className={'card-body ' + (className ?? '')}>{children}</div>;
}

export default CardBody;
