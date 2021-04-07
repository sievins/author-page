//this service is made to handle all localstorage variables
const NEWSLETTERKEY = "newsletter";
let newsLetterValue = localStorage.getItem(NEWSLETTERKEY);

export const getNewsletterSubcription = () => {
  return newsLetterValue;
};

export const subscribeNewsletter = () => {
  localStorage.setItem(NEWSLETTERKEY, true);
  newsLetterValue = true;
};

export const unsubscribeNewsletter = () => {
  localStorage.removeItem(NEWSLETTERKEY);
  newsLetterValue = false;
};
