export type button = {
  kind?: 'button';
  className: string;
  onClickHandler: any;
  lbl: string;
};

function Button(props: button) {
  const { className, onClickHandler, lbl } = props;
  return (
    <button type='button' className={className} onClick={onClickHandler}>
      {lbl}
    </button>
  );
}

export default Button;
