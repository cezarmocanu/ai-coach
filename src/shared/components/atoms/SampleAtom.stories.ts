import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SampleAtom, SampleAtomVariant } from "./SampleAtom";

const meta = {
  title: "atoms/SampleAtom",
  component: SampleAtom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
  args: {
    description: "Variant 1",
    label: "Sample Atom",
    onClick: fn(),
    variant: SampleAtomVariant.default,
  },
} satisfies Meta<typeof SampleAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dense: Story = {
  args: {
    description: "Variant 2",
    variant: SampleAtomVariant.dense,
  },
};
