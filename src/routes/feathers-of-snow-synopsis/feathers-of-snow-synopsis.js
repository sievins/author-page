import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../../hooks";
import Underlay from "../underlay";
import { Series } from "../components";
import feathersOfSnow from "../../assets/images/covers/feathers-of-snow-50.jpg";

const useMuiStyles = makeStyles((theme) => ({
  initialPadding: {
    height: theme.spacing(5),
  },
}));

export default function FeathersOfSnowSynopsis() {
  const classes = useStyles(useMuiStyles);

  return (
    <Underlay>
      <div className={classes.initialPadding} />
      <Series
        spotlightedBook={{
          coverSrc: feathersOfSnow,
          title: "feathers of snow",
          showTitle: true,
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/40987692-2912-11eb-8eba-9744d8f5a192",
        }}
        seriesOverview={{
          title: "Synopsis",
          paragraphs: [
            "In Brianna’s new world of ice and snow, the coldest things by far are the eyes of her betrothed...",
            "Brianna bears a deadly secret: she’s not the princess she is pretending to be. If the prince finds out, her life will be forfeit and her country plunged into war.",
            "But there is more to the icy prince than meets the eye, and Brianna slowly unravels the secrets of his dark past while surviving in a strange culture.",
            "However her goodness and wit will only get her so far. Terrifying beasts stalk the border and a murderer is at work in the town. They know the truth of Brianna’s identity and will stop at nothing to destroy all she has fought for.",
          ],
        }}
      />
    </Underlay>
  );
}
