import _ from 'lodash';

import Joi from 'joi';

import Input from '@/components/forms/input/Input';
import InputField from '@/components/forms/inputField/InputField';
import Button from '@/components/basic/button/Button';

function createItem(itemSpecs: any, state: any, errMsgs: any) {
  switch (itemSpecs.kind) {
    case 'input':
      return (
        <Input
          key={itemSpecs.id}
          {...itemSpecs}
          val={state[itemSpecs.paramKey]}
          errMsg={errMsgs[itemSpecs.id]}
        />
      );
    case 'inputField':
      return (
        <InputField
          key={itemSpecs.id}
          {...itemSpecs}
          inputVal={state[itemSpecs.paramKey]}
          errMsg={errMsgs[itemSpecs.id]}
        />
      );
    case 'button':
      return <Button key={itemSpecs.id} {...itemSpecs} />;
  }
}

export function createState(itemsSpecs: any[]) {
  const state: any = {};
  itemsSpecs.forEach(itemSpecs => {
    if ('paramKey' in itemSpecs) {
      state[itemSpecs.paramKey] = '';
    }
  });
  return state;
}

export function createSchema(itemsSpecs: any[]) {
  const schema: any = {};
  _.forEach(itemsSpecs, val => {
    if ('validationHandler' in val) schema[val.id] = val.validationHandler;
  });
  return Joi.object(schema);
}

export function setValsOnItemsExistingProps(itemsSpecs: any[], keyVals: any) {
  return _.map(itemsSpecs, itemSpecs => {
    keyVals.forEach(([key, val]: [string, any]) => {
      if (key in itemSpecs) itemSpecs[key] = val;
    });
    return itemSpecs;
  });
}

export function createItems(itemsSpecs: [], state: any, errMsgs: any) {
  return (
    <>{_.map(itemsSpecs, itemSpecs => createItem(itemSpecs, state, errMsgs))}</>
  );
}

export function validateForm(state: any, schema: any) {
  const result = schema.validate(state, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (!('error' in result)) return null;

  const errors: any = {};
  _.forEach(result.error.details, val => {
    errors[val.path[0]] = val.message;
  });

  return errors;
}
