import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../../../hooks'

const useMuiStyles = makeStyles((theme) => ({
  container: ({ isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen, isPortrait }) => {
    const width =
      isMediumScreen && isPortrait ? 64 : // iPad Pro
      isSmallScreen && isPortrait ? 52 : // iPad
      isLargeScreen ? 64 :
      isMediumScreen ? 52 :
      isSmallScreen ? 34 :
      isExtraSmallScreen ? 32 : 32

    return {
      width: theme.spacing(width),
    }
  },
}))

export default function Biography() {
  const classes = useStyles(useMuiStyles)

  return (
    <div className={classes.container}>
      <p>
        Alice lives in Bristol, England. She is wife to Sam, mummy to Nathan and owns the best dog in the world, Summer. She has loved fantasy all her life and is currently writing a prequel to ‘The Flawed Princess’ called ‘Queen Avan,’ and a new Asian fantasy trilogy called 'City of Flowers'. She loves reading, walking the dog and spending time with her church family.
      </p>
      <p>
        She also writes Christian Fiction under the pen name Alice Gent, and relevant Christ centred articles for the magazine Heirs.
      </p>
    </div>
  )
}
