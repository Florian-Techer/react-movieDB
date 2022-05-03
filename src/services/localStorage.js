export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export function getLocalStorage(key) {
  window.localStorage.getItem(key);
}

