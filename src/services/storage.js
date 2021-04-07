//this service is made to handle all localstorage variables
const NEWSLETTER = "newsletter";

export const getNewsletterSubcription = () => {
  return localStorage.getItem(NEWSLETTER);
};

export const subscribeNewsletter = () => {
  localStorage.setItem(NEWSLETTER, true);
};

export const unsubscribeNewsletter = () => {
  localStorage.removeItem(NEWSLETTER);
};
