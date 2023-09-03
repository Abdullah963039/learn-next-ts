import {
  extendTheme,
  type ThemeConfig,
  defineStyleConfig,
} from "@chakra-ui/react";

// Custom Colors Config
const colors = {
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065",
  },
};

// Color Mode Config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// Custom Containers Config
const Container = defineStyleConfig({
  baseStyle: {
    maxWidth: {
      base: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
});

// Custom Button Config
const Button = defineStyleConfig({
  variants: {
    primary: {
      bg: "violet.600",
      color: "white",
      _hover: {
        bg: "violet.700",
        shadow: "xs",
      },
      _active: {
        bg: "violet.400",
        shadow: "sm",
      },
    },
  },
});

const theme = extendTheme({
  config,
  colors,
  components: { Container, Button },
});

export default theme;
