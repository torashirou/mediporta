import type { Meta, StoryObj } from '@storybook/react';

import ContextTablePagination from '../molecules/ContextTablePagination';

const meta: Meta<typeof ContextTablePagination> = {
  title: 'Molecules/ContextTablePagination',
  component: ContextTablePagination,
  parameters: {
    layout: 'centered',
  },
  args: {
    page: 0,
    rowsPerPage: 10,
    setPage: () => {},
    setRowsPerPage: () => {},
    count: 10
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const contextTablePagination: Story = {
  args: {}
}