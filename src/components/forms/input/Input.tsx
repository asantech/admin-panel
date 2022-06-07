export type input = {
  kind?: 'input';
  type: 'text' | 'password';
  id: string;
  placeholder: string;
  size: string;
};

function Input(props: input) {
  const { id, type, placeholder, size = '' } = props;
  return (
    <input
      id={id}
      className={'form-control ' + size ?? ''}
      type={type ?? 'text'}
      placeholder={placeholder ?? ''}
      disabled={false}
      readOnly={false}
    />
  );
}

export default Input;
