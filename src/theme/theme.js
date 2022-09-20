import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#90caf9",
      dark: "#658dae", // https://imagecolorpicker.com/color-code/90caf9 30% shade
    },
    secondary: {
      main: "#a75d6a",
    },
    background: {
      light: "#f2f2f2",
      dark: "#dfdcdd",
    },
    text: {
      primary: "#282c34",
      secondary: "#4d4d4d",
    },
  },
});
