export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  window.localStorage.getItem(key);
};
