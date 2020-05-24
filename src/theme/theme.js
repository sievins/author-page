import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/green'

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[50],
    },
    secondary: {
      main: pink[400],
    },
  },
})
