import type { Meta, StoryObj } from '@storybook/react';
import { DropdownInput } from './DropdownInput';

const meta: Meta<typeof DropdownInput> = {
  title: 'Components/form/DropdownInput',
  component: DropdownInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: { control: 'object' },
    onChange: { action: 'changed' },
    selected: { control: 'object' },
    className: { control: 'text' },
    placeholder: { control: 'text' },
    names: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { label: 'Opción 1', value: 'label 1' },
      { label: 'Opción 2', value: 'label 2' },
      { label: 'Opción 3', value: 'label 3' },
    ],
    selected: { label: 'label 3', value: 'texto' },
    className: 'dropdown-input',
    placeholder: 'Selecciona una opción',
    names: { label: 'Nombre', value: 'Valor' },
  },
};

export const Secondary: Story = {
  args: {
    options: [
      { label: 'Opción A', value: 'value A' },
      { label: 'Opción B', value: 'value B' },
      { label: 'Opción C', value: 'value C' },
    ],
    selected: { label: 'value B', value: 'texto' },
    className: 'dropdown-input',
    placeholder: 'Selecciona una opción',
    names: { label: 'Nombre', value: 'Valor' },
  },
};