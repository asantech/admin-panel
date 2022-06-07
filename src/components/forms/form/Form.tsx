import InputField from '../inputField/InputField';
import Button from '../../basic/button/Button';
import * as formHelper from '../../../utils/helpers/form.helpers';

function Form(props: any) {
  const { items } = props;
  return <form>{formHelper.createItems(items)}</form>;
}

export default Form;
