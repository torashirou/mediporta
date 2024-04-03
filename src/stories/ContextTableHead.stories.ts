import type { Meta, StoryObj } from '@storybook/react';

import ContextTableHead from '../molecules/ContextTableHead';

const meta: Meta<typeof ContextTableHead> = {
  title: 'Molecules/ContextTableHead',
  component: ContextTableHead,
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const contextTableHead: Story = {
  args: {}
}