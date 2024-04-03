import type { Meta, StoryObj } from '@storybook/react';

import Loader from '../atoms/Loader';

const meta: Meta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const loader: Story = {
  args: {}
}