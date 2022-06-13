import { forEach, has } from 'lodash';

export function convertData(
  data: any,
  dataConversionMap: any,
  conversionDir: 'keyToVal' | 'valToKey' = 'keyToVal'
) {
  const convertedData: any = {};
  console.log(data);
  if (conversionDir === 'keyToVal') {
    forEach(data, (val, key) => {
      if (has(dataConversionMap, key)) {
        convertedData[dataConversionMap[key]] = val;
      }
    });
  } else if (conversionDir === 'valToKey') {
    forEach(dataConversionMap, (val, key) => {
      console.log(val, key);

      if (has(data, val)) {
        convertedData[key] = data[val];
      }
    });
  }
  return convertedData;
}
