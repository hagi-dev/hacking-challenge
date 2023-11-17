import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';


const meta: Meta<typeof Accordion> = {
  title: 'Components/form/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: { control: 'text' },
    children: { control: 'text' },
    onClickAction: { action: 'clicked' },
    isAdded: { control: 'boolean' },
    isOpenDefault: { control: 'boolean' },
    title: { control: 'text' },
    urlImage: { control: 'text' },
    version: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: '1',
    children: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
    isAdded: false,
    isOpenDefault: false,
    title: 'Título del acordeón',
    urlImage: '../../../assets/images/llantaRobadaCobertura.png',
    version: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    id: '2',
    children: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
    isAdded: true,
    isOpenDefault: true,
    title: 'Título del acordeón',
    urlImage: '../../../assets/images/choqueCobertura.png',
    version: 'secondary',
  },
};