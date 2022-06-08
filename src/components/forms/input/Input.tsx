export type input = {
  type: 'text' | 'password';
  id: string;
  placeholder: string;
  cssClasses: string;
  onChangeHandler: any;
};

function Input(props: input) {
  const { id, type, placeholder, cssClasses, onChangeHandler } = props;

  return (
    <input
      id={id}
      className={'form-control ' + cssClasses ?? ''}
      type={type ?? 'text'}
      placeholder={placeholder ?? ''}
      autoComplete='off'
      onChange={e => onChangeHandler(e)}
    />
  );
}

export default Input;
