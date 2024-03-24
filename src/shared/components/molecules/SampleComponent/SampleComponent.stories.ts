import type { Meta, StoryObj } from "@storybook/react";
import { SampleComponent, SampleComponentVariant } from "./SampleComponent";

const meta = {
  title: "molecules/SampleComponent",
  component: SampleComponent,
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
    variant: SampleComponentVariant.default,
  },
} satisfies Meta<typeof SampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dense: Story = {
  args: {
    description: "Dense Content",
    variant: SampleComponentVariant.dense,
  },
};

export const Expandable: Story = {
  args: {
    description: "Expandable content",
    variant: SampleComponentVariant.expandable,
  },
};
