function Card(props: any) {
  const { className, children } = props;
  return <div className={'card ' + (className ?? '')}>{children}</div>;
}

export default Card;
