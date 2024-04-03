import type { Meta, StoryObj } from '@storybook/react';

import RowsCounter from '../molecules/RowsCounter';

const meta: Meta<typeof RowsCounter> = {
  title: 'Molecules/RowsCounter',
  component: RowsCounter,
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const rowsCounter: Story = {
  args: {}
}