import apiConstants from 'utils/constants/api.constants';

export const baseAPIConfig = Object.freeze({
  baseURL: apiConstants.baseURL,
  url: apiConstants.urls.resources,
  method: 'get',
});

export const resourcesSchema = Object.freeze([
  { path: 'id', lbl: 'Id' },
  { path: 'name', lbl: 'Name' },
  {
    path: 'year',
    lbl: 'Year',
  },
  { path: 'color', lbl: 'Color' },
  { path: 'pantone_value', lbl: 'Pantone' },
  {
    path: 'actions',
  },
]);
