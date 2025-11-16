import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300">Active</Badge>
      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">In Progress</Badge>
      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300">Pending</Badge>
      <Badge className="bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300">Completed</Badge>
      <Badge variant="outline" className="text-muted-foreground">Not Enrolled</Badge>
    </div>
  ),
};

export const DripStatus: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm">Sarah Johnson</span>
        <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300">
          Responded
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Mike Thompson</span>
        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
          Active
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">John Doe</span>
        <Badge variant="outline" className="text-muted-foreground">
          Not Enrolled
        </Badge>
      </div>
    </div>
  ),
};

export const ManagedBy: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>You</Badge>
      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">Sarah (AI)</Badge>
      <Badge variant="secondary">Unassigned</Badge>
    </div>
  ),
};
