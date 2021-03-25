import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import { useStyles } from '../../../hooks'
import SelectableBook from '../selectable-book'

const useMuiStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(8),
  },
  image: {
    width: '100%',
  },
  text: {
    fontSize: 'calc(6px + 1vmin)',
  },
}))

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    coverSrc: PropTypes.string.isRequired,
  })),
}

export default function Books({ books }) {
  const classes = useStyles(useMuiStyles)

  if (books.length === 0) return null

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={5} sm={8} md={8} lg={6}>
        <Grid container spacing={10} justify="center">
          {
            books.map(({ title, coverSrc }) => (
              <Grid item key={title} xs={12} sm={6} md={4}>
                <Grid container justify="center">
                  <Grid item xs={10}>
                    <SelectableBook
                      coverSrc={coverSrc}
                      title={title}
                      classNames={{
                        image: classes.image,
                        text: classes.text,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}
