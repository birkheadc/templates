import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";

import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { CUSTOM_VIEWPORTS } from "./customViewports";

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };

const config: TestRunnerConfig = {
  async preVisit(page, story) {
    // Accesses the story's parameters and retrieves the viewport used to render it
    const context = await getStoryContext(page, story);
    const viewportName = context.parameters?.viewport?.defaultViewport;
    const viewportParameter =
      MINIMAL_VIEWPORTS[viewportName] ?? CUSTOM_VIEWPORTS[viewportName];

    if (viewportParameter && viewportParameter.styles) {
      const styles =
        typeof viewportParameter.styles === "function"
          ? viewportParameter.styles(undefined)
          : viewportParameter.styles;

      page.setViewportSize({
        width: parseInt(styles.width),
        height: parseInt(styles.height),
      });
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE);
    }
  },
};

export default config;
