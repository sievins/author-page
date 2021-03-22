import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[50],
    },
    secondary: {
      main: green[400],
    },
    background: {
      light: '#f2f2f2',
      dark: '#dfdcdd',
    },
  },
})
