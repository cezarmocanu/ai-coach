import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];

export default preview;
