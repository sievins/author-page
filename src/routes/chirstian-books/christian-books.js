import React from 'react'
import { useStyles } from '../../hooks'
import { makeStyles } from '@material-ui/core/styles'
import Underlay from '../underlay'
import { Series } from '../components'
import sarahsFootsteps from '../../assets/images/covers/sarahs-footsteps.jpeg'
import leaving from '../../assets/images/covers/leaving.jpg'

const useMuiStyles = makeStyles((theme) => ({
  initialPadding: {
    height: theme.spacing(5),
  },
}))

export default function ChristianBooks() {
  const classes = useStyles(useMuiStyles)

  return (
    <Underlay>
      <div className={classes.initialPadding} />
      <Series
        spotlightedBook={{
          coverSrc: sarahsFootsteps,
          title: 'Sarah’s Footsteps',
          showTitle: false,
          universalBookLink: 'https://storyoriginapp.com/universalbooklinks/d168ec02-2fa2-11ea-b06d-ffddceea3d04',
        }}
        seriesOverview={{
          title: 'Sarah’s Footsteps',
          paragraphs: [
            'Sometimes following the paths of our friends take us to unexpected places...',
            'University. A stepping stone to adulthood. A place to find independence. A time to have fun and make great friends. An arena to learn skills and explore ideas. And, in Izzy’s case, a year where her life is turned upside down.',
            'Surrounded by a world that suddenly doesn’t make sense, Izzy finds herself asking difficult questions of identity, morality and the role of faith.',
            'In her struggle to find fulfilment in love, she finally stumbles across true redemption in a long rejected Saviour.',
          ],
        }}
        showDivider={true}
      />
      <Series
        spotlightedBook={{
          coverSrc: leaving,
          title: 'Leaving',
          showTitle: false,
          universalBookLink: 'https://storyoriginapp.com/universalbooklinks/273c8b14-c35c-11ea-92ee-b77d121f04dd',
        }}
        seriesOverview={{
          title: 'Leaving',
          paragraphs: [
            'If university days are the best days of your life, what comes after?',
            'Evie loved Bristol Uni, but now it’s time for her to stand on her own. She had always assumed everything would fall into place, expecting her degree, strong faith and friendships to be all she needed.',
            'What she wasn’t expecting was doubt, loneliness and depression.',
            'Life is tough, her job boring, and her only friend seems to be a cactus named Kevin. Not even her faith brings the comfort and assurance it once did.',
            'As God feels further and further away, Evie struggles to find the path that will bring her happiness, without losing her faith and everything she stands for in the process.',
          ],
        }}
      />
    </Underlay>
  )
}
