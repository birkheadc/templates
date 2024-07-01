import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import PrimaryNav from "./PrimaryNav";

const meta: Meta<typeof PrimaryNav> = {
  title: "Components/Nav/PrimaryNav",
  component: PrimaryNav,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeScreen: Story = {
  args: {},
};

export const SmallScreen: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
};

export const OpenLeftPanel: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);
    const menuButton = canvas.getByLabelText("open navigation menu");

    await expect(menuButton).toBeDefined();

    await userEvent.click(menuButton);

    // Todo: Expect panel to be open
  },
};

export const OpenRightPanel: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);
    const menuButton = canvas.getByLabelText("open profile menu");

    await expect(menuButton).toBeDefined();

    await userEvent.click(menuButton);

    // Todo: Expect panel to be open
  },

  // Todo: Write stories for escape key / click outside to close
};
