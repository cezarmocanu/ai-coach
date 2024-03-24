import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "./ChevronDown";

const meta = {
  title: "atoms/ChevronDown",
  component: ChevronDown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ChevronDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
