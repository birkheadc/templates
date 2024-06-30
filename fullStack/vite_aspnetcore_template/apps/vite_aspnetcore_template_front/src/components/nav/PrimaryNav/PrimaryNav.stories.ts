import type { Meta, StoryObj } from "@storybook/react";
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
