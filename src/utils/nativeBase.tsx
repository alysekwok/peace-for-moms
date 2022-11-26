import { extendTheme } from "native-base";

const primary = {};

const secondary = {};

const tertiary = {};

export const theme = extendTheme({
  colors: { primary, secondary, tertiary },
  config: {},
  components: {
    Card: {
      defaultProps: {
        backgroundColor: "gray.900",
      },
    },
    Heading: {
      defaultProps: {
        color: "white",
      },
    },
    Text: {
      defaultProps: {
        color: "white",
      },
    },
    Input: {
      baseStyle: {
        keyboardAppearance: "dark",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "md",
        paddingBottom: 2,
        paddingTop: 2,
        paddingLeft: 4,
        paddingRight: 4,
      },
      variants: {
        solid: () => ({
          backgroundColor: "primary.600",
          _pressed: { backgroundColor: "primary.900" },
        }),
        ghost: () => ({
          _pressed: { backgroundColor: "gray.800" },
          _text: { color: "white" },
        }),
      },
    },
  },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
