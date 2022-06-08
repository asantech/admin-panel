export type button = {
  id: string;
  className: string;
  onClickHandler: any;
  lbl: string;
};

function Button(props: button) {
  const { id, className, onClickHandler, lbl } = props;
  return (
    <button
      id={id}
      type='button'
      className={className}
      onClick={onClickHandler}
    >
      {lbl}
    </button>
  );
}

export default Button;
