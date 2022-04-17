import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: { mode: "dark" },
  components: {
    MuiStack: {
      defaultProps: {
        spacing: 1,
      },
    },
  },
});

export default darkTheme;
