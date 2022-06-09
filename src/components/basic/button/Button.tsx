export type button = {
  id: string;
  className: string;
  onClickHandler: any;
  lbl: string;
  disabled: true | false;
};

function Button(props: button) {
  const { id, className, onClickHandler, disabled, lbl } = props;
  return (
    <button
      id={id}
      type='button'
      className={className}
      onClick={onClickHandler}
      disabled={disabled ?? false}
    >
      {lbl}
    </button>
  );
}

export default Button;
