import type { Meta, StoryObj } from "@storybook/react";
import { ChevronUp, ChevronUpVariant } from "./ChevronUp";

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

export const Outlined: Story = {
  args: {
    variant: ChevronUpVariant.outline,
 }
};
export const Solid: Story = {
  args: {
    variant: ChevronUpVariant.solid,
 }
}
export const Mini: Story = {
  args: {
    variant: ChevronUpVariant.mini,
 }
}
export const Micro: Story = {
  args: {
    variant: ChevronUpVariant.micro,
 }
}