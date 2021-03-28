import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'

const dismissedCookieNotification = document.cookie
  .split('; ')
  .find(row => row.startsWith('dismissedCookieNotification'))

export default function CookieSnackbar() {
  const [open, setOpen] = useState(!dismissedCookieNotification)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    document.cookie = 'dismissedCookieNotification=true; expires=Fri, 31 Dec 9999 23:59:59 GMT'
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      message="This website uses cookies to give you the option to sign up to the newsletter"
      action={
        <Button color="secondary" size="small" onClick={handleClose}>
          OK
        </Button>
      }
    />
  )
}
