import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDownVariant } from "./ChevronDown";

const meta = {
  title: "atoms/ChevronDown",
  component: ChevronDownVariant,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ChevronDownVariant>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChevronDown: Story = {};
