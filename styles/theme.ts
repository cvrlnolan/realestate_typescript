// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
export const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Bebas Neue, sans-serif",
  },
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
