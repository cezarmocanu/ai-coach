import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDownVariant } from "./ChevronDown";

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

export const ChevronDown: Story = {};
