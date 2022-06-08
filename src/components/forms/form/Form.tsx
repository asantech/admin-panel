import { useState } from 'react';
import _ from 'lodash';

import * as formHelpers from '@/utils/helpers/form.helpers';

function Form(props: any) {
  let { items } = props;

  items = formHelpers.setValsOnItemsExistingProps(items, [
    ['onChangeHandler', handleOnChange],
    ['onClickHandler', handleSubmit],
  ]);

  const [itemsVals, setItemsVals] = useState(formHelpers.createState(items));
  const [errs, setErrs] = useState({});

  const schema = formHelpers.createSchema(items);

  function handleOnChange(e: any) {
    const itemId = e.target.getAttribute('id');
    const newItemsVals = { ...itemsVals };

    const changedItem = _.find(items, function (item) {
      return item.id === itemId;
    });

    if (changedItem) newItemsVals[changedItem.paramKey] = e.target.value;
    setItemsVals(newItemsVals);
  }

  function handleSubmit(e: any) {
    const validationErrs = formHelpers.validateForm(itemsVals, schema);
    if (validationErrs) {
      setErrs(validationErrs);
      return;
    }
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {formHelpers.createItems(items, itemsVals, errs)}
    </form>
  );
}

export default Form;
