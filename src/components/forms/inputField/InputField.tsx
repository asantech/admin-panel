import Label from '../label/Label';
import Input from '../input/Input';

export type inputField = {
  id: string;
  lbl: string;
  inputCSSClasses: string;
  inputType: 'text' | 'password';
  inputVal: string | number;
  placeholder: string;
  onChangeHandler: any;
  errMsg: string;
};

function InputField(props: inputField) {
  const {
    id,
    lbl,
    inputCSSClasses,
    inputType,
    placeholder,
    onChangeHandler,
    inputVal,
    errMsg,
  } = props;
  return (
    <div className='form-group'>
      <Label id={id} lbl={lbl} />
      <Input
        id={id}
        cssClasses={inputCSSClasses}
        type={inputType}
        placeholder={placeholder}
        onChangeHandler={onChangeHandler}
        val={inputVal}
        errMsg={errMsg}
      />
    </div>
  );
}

export default InputField;
