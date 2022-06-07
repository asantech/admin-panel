import _ from 'lodash';

import Input, { input } from './../../components/forms/input/Input';
import InputField, {
  inputField,
} from './../../components/forms/inputField/InputField';
import Button, { button } from '../../components/basic/button/Button';

function getItem(itemSpecs: input | inputField | button) {
  let formControl;
  switch (itemSpecs.kind) {
    case 'input':
      {
        const { id, type, size, placeholder } = itemSpecs;
        // formControl = (
        //   <Input id={id} type={type} size={size} placeholder={placeholder} /> // use spread props later
        // );
        formControl = (
          <Input {...itemSpecs} /> // use spread props later
        );
      }
      break;
    case 'inputField':
      {
        let { id, lbl, inputType, inputSize, placeholder } = itemSpecs;
        // formControl = (
        //   <InputField
        //     id={id}
        //     lbl={lbl}
        //     inputType={inputType}
        //     inputSize={inputSize}
        //     placeholder={placeholder}
        //   />
        // );
        formControl = <InputField {...itemSpecs} />;
      }
      break;
    case 'button':
      {
        let { className, lbl, onClickHandler } = itemSpecs;
        formControl = (
          <Button
            className={className}
            lbl={lbl}
            onClickHandler={onClickHandler}
          />
        );
      }
      break;
  }
  return formControl;
}

export function createItems(itemsSpecs: []) {
  return <>{_.map(itemsSpecs, itemSpecs => getItem(itemSpecs))}</>;
}
