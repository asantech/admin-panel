import { useState } from 'react';
import { find, isEmpty, has } from 'lodash';

import * as formHelpers from '@/utils/helpers/form.helpers';

function Form(props: any) {
  let { items } = props;

  const [errs, setErrs] = useState({});

  const addedItemsPropsValsConfig = {
    onChangeHandler: handleOnChange,
    onClickHandler: handleSubmit,
    disabled: Boolean(Object.keys(errs).length),
  };

  const initialState = formHelpers.createState(
    formHelpers.setValsOnItemsExistingProps(items, addedItemsPropsValsConfig)
  );

  const [itemsVals, setItemsVals] = useState(initialState);

  function resetForm() {
    setItemsVals(initialState);
  }

  const validationSchema: any = formHelpers.createSchema(items);

  function handleOnChange(e: any) {
    const itemId: string = e.target.getAttribute('id');
    const newItemsVals = { ...itemsVals };
    newItemsVals[itemId] = e.target.value;

    const changedItem = find(items, function (item) {
      return item.id === itemId;
    });

    if (changedItem) {
      const validationErrMsg = formHelpers.validateItem(
        { [itemId]: newItemsVals[itemId] },
        { [itemId]: validationSchema[itemId] }
      );
      const newErrs: any = { ...errs };
      if (validationErrMsg) {
        newErrs[itemId] = validationErrMsg;
      } else {
        delete newErrs[itemId];
      }
      setErrs(newErrs);
    }

    setItemsVals(newItemsVals);
  }

  function handleSubmit() {
    const validationErrs = formHelpers.validateItems(
      itemsVals,
      validationSchema
    );

    if (!isEmpty(validationErrs)) {
      setErrs(validationErrs);
      return;
    }

    if (props.has('onHandleSubmit'))
      props.onHandleSubmit({ itemsVals, resetForm });
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
