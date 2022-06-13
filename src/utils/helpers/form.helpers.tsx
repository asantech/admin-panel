import { forEach, map, isEmpty } from 'lodash';
import Joi from 'joi';

import Input from '@/components/forms/input/Input';
import InputField from '@/components/forms/inputField/InputField';
import Button from '@/components/basic/button/Button';

function createItem(itemSpecs: any, state: any, errMsgs: any) {
  const { kind, id } = itemSpecs;
  switch (kind) {
    case 'input':
      return (
        <Input key={id} {...itemSpecs} val={state[id]} errMsg={errMsgs[id]} />
      );
    case 'inputField':
      return (
        <InputField
          key={id}
          {...itemSpecs}
          inputVal={state[id]}
          errMsg={errMsgs[id]}
        />
      );
    case 'button':
      return <Button key={id} {...itemSpecs} />;
  }
}

export function createState(itemsSpecs: any[]) {
  const state: any = {};
  itemsSpecs.forEach(itemSpecs => {
    if (
      'id' in itemSpecs &&
      (itemSpecs.kind === 'inputField' || itemSpecs.kind === 'input')
    ) {
      state[itemSpecs.id] = '';
    }
  });
  return state;
}

export function createSchema(itemsSpecs: any[]) {
  const schema: any = {};
  forEach(itemsSpecs, val => {
    if ('validationHandler' in val) schema[val.id] = val.validationHandler;
  });
  return schema;
}

export function setValsOnItemsExistingProps(itemsSpecs: any[], keyVals: any) {
  return map(itemsSpecs, itemSpecs => {
    forEach(keyVals, (val: any, key: string) => {
      if (key in itemSpecs) itemSpecs[key] = val;
    });
    return itemSpecs;
  });
}

export function createItems(itemsSpecs: [], state: any, errMsgs: any) {
  return (
    <>{map(itemsSpecs, itemSpecs => createItem(itemSpecs, state, errMsgs))}</>
  );
}

export function validateItem(state: any, schema: any) {
  const { error } = Joi.object(schema).validate(state);
  return error ? error.details[0].message : null;
}

export function validateItems(state: any, schema: any) {
  const { error }: { error: any } = Joi.object(schema).validate(state, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (isEmpty(error)) return null;

  const errors: any = {}; // بررسی شود که map و reduce قابل استفاده هست یا خیر
  forEach(error.details, val => {
    errors[val.path[0]] = val.message;
  });

  return errors;
}
