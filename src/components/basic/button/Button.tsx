export type button = {
  id?: string;
  className: string;
  onClickHandler?: any;
  disabled?: true | false;
  children: any;
};

function Button(props: button) {
  const { id, className, onClickHandler, disabled, children } = props;
  return (
    <button
      id={id}
      type='button'
      className={'btn ' + className ?? ''}
      onClick={onClickHandler}
      disabled={disabled ?? false}
    >
      {children}
    </button>
  );
}

export default Button;
