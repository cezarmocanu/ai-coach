import type { Meta, StoryObj } from "@storybook/react";
import { ChevronUp } from "./ChevronUp";

const meta = {
  title: "atoms/ChevronUp",
  component: ChevronUp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ChevronUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
