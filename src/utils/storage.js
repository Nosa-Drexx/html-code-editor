const setLocalStorageItem = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
  return;
};

const getLocalStorageItem = (key) => {
  const itemData = JSON.parse(window.localStorage.getItem(key));
  return itemData;
};

const removeLocalStorageItem = (key) => {
  window.localStorage.removeItem(key);
  return;
};

export { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem };
