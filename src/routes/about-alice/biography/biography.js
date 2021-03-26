import React from 'react'
import Link from '@material-ui/core/Link'
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

    const margin = theme.spacing(5)

    return {
      width: theme.spacing(width),
      alignSelf: 'center',
      marginTop: isPortrait ? null : margin,
      marginBottom: margin,
    }
  },
}))

export default function Biography() {
  const classes = useStyles(useMuiStyles)

  return (
    <div className={classes.container}>
      <p>
        Alice is a USA Today bestselling author. She is also an award winning international and Barnes and Noble bestseller.
      </p>
      <p>
        She lives in Bristol, England. She is wife to Sam, mummy to their toddler and owns the best dog in the world, Summer. She has loved fantasy all her life and is currently writing three fairytale retellings. When she's not off galavanting in other worlds, she loves walking the dog and spending time with her church family.
      </p>
      <p>
        She also writes Christian Fiction under the pen name Alice Gent and writes relevant Christ-centred articles for Heirs Magazine.
      </p>
      <p>
        Alice hopes to change the world for the better, one word at a time.
      </p>
      <p>
        Follow Alice on Facebook for all her books: <Link href="https://www.facebook.com/sarahsfootsteps/" target="_blank" rel="noreferrer">www.facebook.com/sarahsfootsteps</Link>
      </p>
      <p>
        Or talk to Alice about your favourite fantasy in her readers' group: <Link href="https://www.facebook.com/groups/AliceIvinya/" target="_blank" rel="noreferrer">www.facebook.com/groups/AliceIvinya</Link>
      </p>
    </div>
  )
}
