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
    await expect(canvasElement.clientWidth).toBe(360);

    const menuButton = canvas.getByLabelText("toggle navigation menu");

    await expect(menuButton).toBeDefined();
    await expect(menuButton).toBeVisible();

    await userEvent.click(menuButton);

    // Todo: Find panel in a more robust way
    const panel = canvas.getByText("navigation");
    await expect(panel).toBeVisible();
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
    const menuButton = canvas.getByLabelText("toggle profile menu");

    await expect(menuButton).toBeDefined();
    await expect(menuButton).toBeVisible();

    await userEvent.click(menuButton);

    // Todo: Find panel in a more robust way
    const panel = canvas.getByText("profile");
    await expect(panel).toBeVisible();
  },
};

export const OpenRightPanelClosesLeftPanel: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);
    const navigationButton = canvas.getByLabelText("toggle navigation menu");

    await expect(navigationButton).toBeDefined();
    await expect(navigationButton).toBeVisible();

    await userEvent.click(navigationButton);

    // Todo: Find panel in a more robust way
    const navigationPanel = canvas.getByText("navigation");
    await expect(navigationPanel).toBeVisible();

    const profileButton = canvas.getByLabelText("toggle profile menu");

    await expect(navigationButton).toBeDefined();
    await expect(navigationButton).toBeVisible();

    await userEvent.click(profileButton);

    const profilePanel = canvas.getByText("profile");
    await expect(profilePanel).toBeVisible();
    await expect(navigationPanel).not.toBeVisible();
  },
};

export const ClosePanelEscape: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);
    const menuButton = canvas.getByLabelText("toggle navigation menu");

    await expect(menuButton).toBeDefined();
    await expect(menuButton).toBeVisible();

    await userEvent.click(menuButton);

    // Todo: Find panel in a more robust way
    const panel = canvas.getByText("navigation");
    await expect(panel).toBeVisible();

    await userEvent.keyboard("{Escape}");
    await expect(panel).not.toBeVisible();
  },
};

export const ClosePanelClickOutside: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);
    const menuButton = canvas.getByLabelText("toggle navigation menu");

    await expect(menuButton).toBeDefined();
    await expect(menuButton).toBeVisible();

    await userEvent.click(menuButton);

    // Todo: Find panel in a more robust way
    const panel = canvas.getByText("navigation");
    await expect(panel).toBeVisible();

    await userEvent.click(document.body);

    await expect(panel).not.toBeVisible();
  },
};
