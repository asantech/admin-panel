import _ from 'lodash';

import Input from '@/components/forms/input/Input';
import InputField from '@/components/forms/inputField/InputField';
import Button from '@/components/basic/button/Button';

function getItem(itemSpecs: any) {
  switch (itemSpecs.kind) {
    case 'input':
      return <Input key={itemSpecs.id} {...itemSpecs} />;
    case 'inputField':
      return <InputField key={itemSpecs.id} {...itemSpecs} />;
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

export function setValsOnItemsExistingProps(itemsSpecs: any[], keyVals: any) {
  return _.map(itemsSpecs, itemSpecs => {
    keyVals.forEach(([key, val]: [string, any]) => {
      if (key in itemSpecs) itemSpecs[key] = val;
    });
    return itemSpecs;
  });
}

export function createItems(itemsSpecs: []) {
  return <>{_.map(itemsSpecs, itemSpecs => getItem(itemSpecs))}</>;
}
