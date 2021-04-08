//this service is made to handle all localstorage variables
export const items = {
  isSubscribedToNewsletter: "isSubscribedToNewsletter",
};

export const getItem = (key) => localStorage.getItem(key);
export const setItem = (key, value) => localStorage.setItem(key, value);
export const removeItem = (key) => localStorage.removeItem(key);
