import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/form/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    options: { control: 'object' },
    onSelect: { action: 'selected' },
    version: { control: 'text' },
    defaultValue: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'dropdown',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    version: 'primary',
    defaultValue: '1',
  },
};

export const Secondary: Story = {
  args: {
    name: 'dropdown',
    options: [
      { label: 'Option A', value: 'A' },
      { label: 'Option B', value: 'B' },
      { label: 'Option C', value: 'C' },
    ],
    version: 'secondary',
    defaultValue: 'A',
  },
};