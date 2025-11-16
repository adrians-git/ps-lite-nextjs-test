import type { Meta, StoryObj } from '@storybook/react';
import { AssistantAvatar } from './AssistantAvatar';

const meta = {
  title: 'Components/AssistantAvatar',
  component: AssistantAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rep: {
      control: 'select',
      options: ['sarah', 'emily', 'michael', 'david'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof AssistantAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sarah: Story = {
  args: {
    rep: 'sarah',
    size: 'md',
  },
};

export const Emily: Story = {
  args: {
    rep: 'emily',
    size: 'md',
  },
};

export const Michael: Story = {
  args: {
    rep: 'michael',
    size: 'md',
  },
};

export const David: Story = {
  args: {
    rep: 'david',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    rep: 'sarah',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    rep: 'sarah',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    rep: 'sarah',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    rep: 'sarah',
    size: 'xl',
  },
};

export const AllAssistants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">All Assistants</h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <AssistantAvatar rep="sarah" size="lg" />
            <span className="text-sm">Sarah</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AssistantAvatar rep="emily" size="lg" />
            <span className="text-sm">Emily</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AssistantAvatar rep="michael" size="lg" />
            <span className="text-sm">Michael</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AssistantAvatar rep="david" size="lg" />
            <span className="text-sm">David</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
        <div className="flex items-end gap-4">
          <div className="flex flex-col items-center gap-2">
            <AssistantAvatar rep="sarah" size="sm" />
            <span className="text-xs">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AssistantAvatar rep="sarah" size="md" />
            <span className="text-xs">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AssistantAvatar rep="sarah" size="lg" />
            <span className="text-xs">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AssistantAvatar rep="sarah" size="xl" />
            <span className="text-xs">X-Large</span>
          </div>
        </div>
      </div>
    </div>
  ),
};
