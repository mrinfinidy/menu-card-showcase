import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        orangeFg: {
          value: { _light: "{colors.orange.200}", _dark: "{colors.orange.600}"},
        },
        orangeBg: {
          value: { _light: "{colors.orange.600}", _dark: "{colors.orange.200}"},
        },
      },
    },
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
});

export const menuItemColors = {
  bgCardLight: "orange.200",
  bgCardDark: "orange.600",
  bgImageLight: "orange.200",
  bgImageDark: "orange.600",
  bgButtonLight: "orange.600",
  bgButtonDark: "orange.200",
  colorDescriptionLight: "orange.600",
  colorDescriptionDark: "orange.200",
  colorButtonLight: "white",
  colorButtonDark: "black",
};

export const system = createSystem(defaultConfig, config);
