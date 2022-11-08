import { createTheme, Theme } from "@mui/material";
import colors from "./colors";

const createThemeComponent = (): Theme =>
  createTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            background: colors.white,
            borderRadius: 0,
            boxShadow:
              "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: colors.white,
            fontFamily: '"Intel", sans-serif',
          },
          body1: {
            color: colors.h1Primary,
            fontSize: "18px",
            "@media(max-width: 768px)": {
              fontSize: "15px",
            },
          },
          body2: {
            fontSize: "20px",
            "@media(max-width: 768px)": {
              color: colors.body2Mobile,
            },
          },
          h1: {
            fontWeight: 700,
            fontSize: 24,
            color: colors.h1Primary,
          },
          h2: {
            fontWeight: 700,
            fontSize: 20,
            color: colors.h1Primary,
          },
          h3: {
            fontWeight: 400,
            fontSize: 18,
            color: colors.h1Primary,
          },
          subtitle1: {
            fontSize: 16,
            fontWeight: 400,
            color: colors.subtitle1Primary,
          },
          subtitle2: {
            fontSize: 14,
            color: colors.subtitle1Primary,
          },
          caption: {
            fontSize: "18px",
            color: colors.white,
            letterSpacing: "-2%",
            lineHeight: "20px",
            "@media(max-width: 768px)": {
              fontSize: "14px",
            },
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          title: {
            fontSize: "21px",
            fontStyle: "regular",
            fontWeight: "600",
            "@media(max-width: 768px)": {
              fontSize: "15px",
            },
          },
          subheader: {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "18px",
            "@media(max-width: 768px)": {
              fontSize: "15px",
            },
          },
        },
      },

      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: "12px",
            fontWeight: 600,
            color: "#FFE773",
            "&:disabled": {
              color: colors.white,
            },
            height: "52px",
            width: "127px",
          },
          contained: {
            background: colors.buttonBg,
            color: colors.white,
            fontWeight: 600,
            textTransform: "none",
            fontSize: "12px",
            height: "52px",
            width: "127px",
          },
        },
      },
    },
  });

export default createThemeComponent;
