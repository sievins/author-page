import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Book from "./book";
import { Heading } from "../../components";
import { useStyles } from "../../hooks";

const useMuiStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(5),
  },
  notFirstHeadings: {
    marginTop: theme.spacing(5),
  },
  container: {
    margin: `${theme.spacing(5)}px 0`,
  },
}));

export default function ContentAdvisory() {
  const classes = useStyles(useMuiStyles);

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Grid item xs={10} sm={9} md={8} lg={7}>
        <Heading variant="h2" component="h2" className={classes.heading}>
          Summary
        </Heading>
        <p>
          All of Alice Ivinya’s books are intended for older teenage audiences
          (and up!). They will never contain any on page sex, any language
          beyond mild swears, and no excessive gore.
        </p>
        <p>
          However, they may contain moderate violence, character death of both
          people and animals, a high sense of peril with dark undertones, and
          fade to black romantic scenes.
        </p>
        <p>
          Though all of Alice Ivinya’s books contain magic, they will never
          feature the occult or demons.
        </p>
        <p>
          Several books contain main characters with perceived disabilities.
          These are portrayed as valued parts of who they are.
        </p>
        <p>
          All stories end in happy ever after, but this may not come until the
          end of a series.
        </p>
        <Heading
          variant="h2"
          component="h2"
          className={clsx([classes.heading, classes.notFirstHeadings])}
        >
          Trigger warnings for each book
        </Heading>
        <Book title="The Widow and the Beast" advisories="Spousal death." />
        <Book
          title="Feathers of Snow"
          advisories="Bullying, panic attacks, human and animal character death, reference to animal abuse."
        />
        <Book
          title="Feathers of Blood"
          advisories="Panic attacks, reference to animal abuse."
        />
        <Book
          title="Kingdom of Feathers"
          advisories="Panic attacks, character deaths."
        />
        <Book
          title="Silent Melody"
          advisories="Child kidnap (based on Pied Piper), reference to child death, bullying."
        />
        <Book
          title="Enchanted Melody"
          advisories="Child kidnap, depression, reference to previous child abuse."
        />
        <Book
          title="The Flawed Princess"
          advisories="Bullying, human and animal character death including an eight year old girl."
        />
        <Book title="Queen Avan" advisories="Character death." />
      </Grid>
    </Grid>
  );
}
