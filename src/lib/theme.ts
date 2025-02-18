import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        DEFAULT: {
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

export const system = createSystem(defaultConfig, config);
