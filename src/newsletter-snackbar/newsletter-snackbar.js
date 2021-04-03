import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";

const referredFromNewsletterSignup =
  document.referrer === "https://sendfox.com/";

export default function NewsletterSnackbar() {
  const [open, setOpen] = useState(referredFromNewsletterSignup);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      message="Thank you for signing up to my newsletter - have a wonderful day!"
    />
  );
}
