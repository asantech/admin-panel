import Label from '../label/Label';
import Input from '../input/Input';

export type inputField = {
  kind?: 'inputField';
  id: string;
  lbl: string;
  inputSize: string;
  inputType: 'text' | 'password';
  placeholder: string;
};

function InputField(props: inputField) {
  const { id, lbl, inputSize, inputType, placeholder } = props;
  return (
    <>
      <Label id={id} lbl={lbl} />
      <Input
        id={id}
        size={inputSize}
        type={inputType}
        placeholder={placeholder}
      />
    </>
  );
}

export default InputField;
