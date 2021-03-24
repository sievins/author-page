import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[50],
    },
    secondary: {
      main: '#a75d6a',
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
