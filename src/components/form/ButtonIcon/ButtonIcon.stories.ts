import type { Meta, StoryObj } from '@storybook/react';
import {ButtonIcon} from './ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/form/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    version: { control: 'text' },
    isActive: { control: 'boolean' },
    text: { control: 'text' },
    symbol: { control: 'text' },
    color: { control: 'text' },
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
    symbol: '>',
    color: 'base',
  },
};

export const Secondary: Story = {
  args: {
    version: 'secondary',
    isActive: true,
    text: 'percentaje',
    symbol: '%',
    color: 'base',
  },
};

export const Disabled: Story = {
  args: {
    version: 'primary',
    isActive: false,
    text: 'Comprar',
    symbol: '>',
    color: 'base',
  },
};