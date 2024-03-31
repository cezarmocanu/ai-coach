import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDown, ChevronDownVariant } from "./ChevronDown";

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

export const Outlined: Story = {
  args: {
    variant: ChevronDownVariant.outline,
 }
};
export const Solid: Story = {
  args: {
    variant: ChevronDownVariant.solid,
 }
}
export const Mini: Story = {
  args: {
    variant: ChevronDownVariant.mini,
 }
}
export const Micro: Story = {
  args: {
    variant: ChevronDownVariant.micro,
 }
}
