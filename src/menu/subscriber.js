export const showNewsletterSubscription = () => {
  document.cookie = 'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;'
  document.cookie = 'MCPopupSubscribed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;'
  window.dojoRequire(
    ['mojo/signup-forms/Loader'],
    L => {
      L.start({
        baseUrl: 'mc.us3.list-manage.com',
        uuid: 'e9b41bd819600a267a1d0397f',
        lid: 'c436762b5b',
        uniqueMethods: true,
      })
    },
  )
}
