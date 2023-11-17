import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    version: { control: 'text' },
    isActive: { control: 'boolean' },
    text: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    version: 'primary',
    isActive: true,
    text: 'Comprar',
  },
};

export const Secondary: Story = {
  args: {
    version: 'secondary',
    isActive: true,
    text: 'Agregar',
  },
};

export const Disabled: Story = {
  args: {
    version: 'primary',
    isActive: false,
    text: 'Comprar',
  },
};