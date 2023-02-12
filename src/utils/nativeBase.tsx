import { extendTheme } from "native-base";

const primary = {};

const secondary = {};

const tertiary = {};

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#efe8fc",
      100: "#cebbf7",
      200: "#ad8df1",
      300: "#8d5fec",
      400: "#6c32e7",
      500: "#5218cd",
      600: "#4013a0",
      700: "#2e0e72",
      800: "#1b0844",
      900: "#090317",
    },
    secondary,
    tertiary,
  },
  config: {},
  components: {
    Card: {
      defaultProps: {
        backgroundColor: "gray.200",
      },
    },
    Heading: {
      defaultProps: {
        color: "black",
      },
    },
    Text: {
      variants: {
        blurb: () => ({
          color: "black",
          fontSize: "sm",
        }),
        contrastBody: () => ({
          color: "white",
          fontSize: "sm",
          textAlign: "center",
        }),
        contrastSubHeading: () => ({
          color: "white",
          fontSize: "md",
          textAlign: "center",
        }),
      },
    },
    Input: {
      baseStyle: {
        keyboardAppearance: "default",
        backgroundColor: "gray.100",
        borderColor: "gray.300",
      },
    },
    Button: {
      baseStyle: {},
      variants: {
        solid: () => ({
          borderRadius: 50,
          paddingBottom: 4,
          paddingTop: 4,
          paddingLeft: 8,
          paddingRight: 8,
          backgroundColor: "primary.400",
          _pressed: { backgroundColor: "primary.500" },
        }),
        ghost: () => ({
          padding: 4,
          _pressed: { backgroundColor: "gray.200" },
          _text: { color: "primary.400" },
        }),
      },
    },
  },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
