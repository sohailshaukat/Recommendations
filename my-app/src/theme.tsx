import {
  mode,
  StyleFunctionProps,
  createBreakpoints,
} from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Lato",
  },
  colors: {
    transparent: "transparent",
    black: {
      800: "#262625",
      900: "#0d0d0d",
    },
    white: {
      50: "#f2f2f0",
      500: "#d9d8d7",
      900: "#bfbfbd",
    },
  },
  styles: {
    global: (props: Dict<any> | StyleFunctionProps) => ({
      body: {
        color: mode("black.800", "white.500")(props),
        bg: mode("white.500", "black.800")(props),
      },
    }),
  },
  breakpoints: createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  }),
});

export default theme;
