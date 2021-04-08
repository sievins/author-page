import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { items, setItem } from "../services/storage";

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
  useEffect(() => {
    if (referredFromNewsletterSignup)
      setItem(items.isSubscribedToNewsletter, true);
  });

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      message="Thank you for signing up to my newsletter - have a wonderful day!"
    />
  );
}
