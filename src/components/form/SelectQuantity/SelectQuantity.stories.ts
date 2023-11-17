import type { Meta, StoryObj } from '@storybook/react';
import { SelectQuantity } from './SelectQuantity';

const meta: Meta<typeof SelectQuantity> = {
  title: 'Components/form/SelectQuantity',
  component: SelectQuantity,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'number' },
    onClick: { action: 'clicked' },
    maxQuantity: { control: 'number' },
    minQuantity: { control: 'number' },
    variantQuantity: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 1,
    maxQuantity: 10,
    minQuantity: 1,
    variantQuantity: 1,
  },
};

export const Secondary: Story = {
  args: {
    value: 5,
    maxQuantity: 20,
    minQuantity: 1,
    variantQuantity: 2,
  },
};