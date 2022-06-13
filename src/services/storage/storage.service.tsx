export const setItem = (key: string, val: string) => {
  localStorage.setItem(key, val);
};

export const getItem = (key: string) => {
  return localStorage.getItem(key) ?? ''; // علت بررسی شود
};

export const delItem = (key: string) => {
  localStorage.removeItem(key);
};

export const hasItem = (key: string) => {
  return key in localStorage;
};
