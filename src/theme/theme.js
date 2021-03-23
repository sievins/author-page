import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import deepOrange from '@material-ui/core/colors/deepOrange'

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[50],
    },
    secondary: {
      main: deepOrange[900],
    },
    background: {
      light: '#f2f2f2',
      dark: '#dfdcdd',
    },
    text: {
      primary: '#282c34',
      secondary: '#4d4d4d',
    },
  },
})
