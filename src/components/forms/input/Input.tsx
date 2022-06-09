export type input = {
  type: 'text' | 'password';
  id: string;
  placeholder: string;
  cssClasses: string;
  onChangeHandler: any;
  onFocusHandler: any;
  val: string | number;
  errMsg: string;
};

function Input(props: input) {
  const {
    id,
    type,
    placeholder,
    cssClasses,
    errMsg,
    onChangeHandler,
    onFocusHandler,
    val,
  } = props;

  return (
    <>
      <input
        id={id}
        className={
          'form-control ' + (cssClasses ?? '') + (errMsg ? ' is-invalid' : '')
        }
        type={type ?? 'text'}
        placeholder={placeholder ?? ''}
        autoComplete='off'
        onChange={e => onChangeHandler(e, props)}
        onFocus={e => onFocusHandler(e, props)}
        value={val}
      />
      {errMsg && <div className='invalid-feedback m-0'>{errMsg}</div>}
    </>
  );
}

export default Input;
