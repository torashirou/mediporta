import type { Meta, StoryObj } from '@storybook/react';

import Main from '../pages/Main';

const meta: Meta<typeof Main> = {
  title: 'Pages/Main',
  component: Main,
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const main: Story = {
}