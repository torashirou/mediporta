import type { Meta, StoryObj } from '@storybook/react';

import ContextTableBody from '../organisms/ContextTableBody';

const meta: Meta<typeof ContextTableBody> = {
  title: 'Organisms/ContextTableBody',
  component: ContextTableBody,
  parameters: {
    layout: 'centered',
  },
  args: {
    rows: [
      {
        name: 'javascript',
        count: 2529139
      },
      {
        name: 'python',
        count: 2192724
      },
      {
        name: 'java',
        count: 1917446
      },
      {
        name: 'c#',
        count: 1615224
      },
      {
        name: 'php',
        count: 1464530
      },
    ],
    order: false
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const contextTableBody: Story = {
}