import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
    version: { control: 'text' },
    name: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '',
    placeholder: 'Enter text',
    type: 'text',
    version: 'primary',
    name: 'input',
  },
};

export const Secondary: Story = {
  args: {
    value: '',
    placeholder: 'Enter text',
    type: 'text',
    version: 'secondary',
    name: 'input',
  },
};