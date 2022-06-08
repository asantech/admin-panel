import Label from '../label/Label';
import Input from '../input/Input';

export type inputField = {
  id: string;
  lbl: string;
  inputCSSClasses: string;
  inputType: 'text' | 'password';
  placeholder: string;
  onChangeHandler: any;
};

function InputField(props: inputField) {
  const { id, lbl, inputCSSClasses, inputType, placeholder, onChangeHandler } =
    props;
  return (
    <div className='form-group'>
      <Label id={id} lbl={lbl} />
      <Input
        id={id}
        cssClasses={inputCSSClasses}
        type={inputType}
        placeholder={placeholder}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
}

export default InputField;
