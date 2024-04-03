import type { Meta, StoryObj } from '@storybook/react';

import ContextTable from '../templates/ContextTable';

const meta: Meta<typeof ContextTable> = {
  title: 'Templates/ContextTable',
  component: ContextTable,
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const contextTable: Story = {
}