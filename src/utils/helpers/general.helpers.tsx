import { forEach, has, toPairs } from 'lodash';

export function convertData(
  data: any,
  dataConversionMap: any,
  conversionDir: 'keyToVal' | 'valToKey' = 'keyToVal'
) {
  const convertedData: any = {};

  if (conversionDir === 'keyToVal') {
    forEach(data, (val, key) => {
      if (has(dataConversionMap, key)) {
        convertedData[dataConversionMap[key]] = val;
      }
    });
  } else if (conversionDir === 'valToKey') {
    forEach(dataConversionMap, (val, key) => {
      if (has(data, val)) {
        convertedData[key] = data[val];
      }
    });
  }
  return convertedData;
}

export function addKeyValsIfDoesntExist(obj: any, keyValsMap: any) {
  const newObj = { ...obj };
  toPairs(keyValsMap).forEach(([key, val]) => {
    if (!has(newObj, key)) newObj[key] = val;
  });
  return newObj;
}
