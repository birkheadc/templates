import { Preview, ReactRenderer } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import withI18next from "./withI18next";

import "../src/styles/main.css";
import { CUSTOM_VIEWPORTS } from "./customViewports";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      routing: { path: "/" },
    }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...CUSTOM_VIEWPORTS,
      },
      defaultViewport: "large",
    },
  },
  decorators: [
    withI18next,
    withRouter,
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
