import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#875caf"
    },
    secondary: {
      main: "#eac435"
    },
    background: {
      default: "#f5f5f5"
    },
    text: {
      primary: "hsla(0,0%,25%,1)",
      secondary: "hsla(0,0%,60%,1)",
      disabled: "hsla(0,0%,70%,1)",
      hint: "hsla(0,0%,80%,1)"
    }
  },
  props: {
    MuiTooltip: {
      arrow: true
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: "fixed",
          backgroundColor: "hsl(0, 0%, 96%)",
          color: "hsl(0, 0%, 27%)",
          boxShadow: "none"
        }
      }
    }
  },
  shape: {
    borderRadius: 10
  }
});
