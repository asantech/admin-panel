import { useState } from 'react';
import { find, isEmpty } from 'lodash';

import store from '@/store/index';
import * as auth from '@/store/authentication/auth';

import * as formHelpers from '@/utils/helpers/form.helpers';

function Form(props: any) {
  let { items } = props;

  const [errs, setErrs] = useState({});

  const addedItemsPropsValsConfig = {
    onChangeHandler: handleOnChange,
    onClickHandler: handleSubmit,
    disabled: Boolean(Object.keys(errs).length),
  };

  const [itemsVals, setItemsVals] = useState(
    formHelpers.createState(
      formHelpers.setValsOnItemsExistingProps(items, addedItemsPropsValsConfig)
    )
  );

  const schema: any = formHelpers.createSchema(items);

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
        { [itemId]: schema[itemId] }
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

  function handleSubmit(e: any) {
    const validationErrs = formHelpers.validateItems(itemsVals, schema);

    if (!isEmpty(validationErrs)) {
      setErrs(validationErrs);
      return;
    }

    store.dispatch(
      auth.signUp({
        email: 'm@m.com',
        password: '12345',
      })
    );

    console.log('send request');
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
