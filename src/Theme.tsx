import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import createThemeComponent from "./theme/muiThemeConfig";

interface Props {
  children: React.ReactNode;
}

const Theme: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const themeConfig = createThemeComponent();

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
