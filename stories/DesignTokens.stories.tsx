import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ name, value, textColor = 'text-foreground' }: { name: string; value: string; textColor?: string }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-24 rounded-lg border shadow-sm ${value}`} />
    <div>
      <div className="font-semibold text-sm">{name}</div>
      <div className="text-xs text-muted-foreground font-mono">{value}</div>
    </div>
  </div>
);

export const BrandColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Primary Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch name="Primary" value="bg-primary" />
          <ColorSwatch name="Secondary" value="bg-secondary" />
          <ColorSwatch name="Accent" value="bg-accent" />
          <ColorSwatch name="Muted" value="bg-muted" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Semantic Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch name="Destructive" value="bg-destructive" />
          <ColorSwatch name="Success" value="bg-green-500" />
          <ColorSwatch name="Warning" value="bg-yellow-500" />
          <ColorSwatch name="Info" value="bg-blue-500" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">UI Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch name="Background" value="bg-background" />
          <ColorSwatch name="Foreground" value="bg-foreground" />
          <ColorSwatch name="Card" value="bg-card" />
          <ColorSwatch name="Border" value="bg-border" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Status Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ColorSwatch name="Active (Green)" value="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300" />
          <ColorSwatch name="Pending (Yellow)" value="bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300" />
          <ColorSwatch name="Error (Red)" value="bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300" />
          <ColorSwatch name="Info (Blue)" value="bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300" />
          <ColorSwatch name="AI (Purple)" value="bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300" />
          <ColorSwatch name="Neutral (Gray)" value="bg-gray-100 text-gray-800 dark:bg-gray-950 dark:text-gray-300" />
        </div>
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Headings</h2>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Heading 1 - Cabinet Grotesk Bold</h1>
          <h2 className="text-3xl font-bold">Heading 2 - Cabinet Grotesk Bold</h2>
          <h3 className="text-2xl font-bold">Heading 3 - Cabinet Grotesk Bold</h3>
          <h4 className="text-xl font-semibold">Heading 4 - Cabinet Grotesk Semibold</h4>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Body Text</h2>
        <div className="space-y-4">
          <p className="text-lg">Large body text - Outfit Regular (18px)</p>
          <p className="text-base">Regular body text - Outfit Regular (16px)</p>
          <p className="text-sm">Small body text - Outfit Regular (14px)</p>
          <p className="text-xs">Extra small text - Outfit Regular (12px)</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Font Weights</h2>
        <div className="space-y-2">
          <p className="font-normal">Normal weight (400)</p>
          <p className="font-medium">Medium weight (500)</p>
          <p className="font-semibold">Semibold weight (600)</p>
          <p className="font-bold">Bold weight (700)</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Special Effects</h2>
        <div className="space-y-4">
          <div className="gradient-text text-4xl font-bold">Gradient Text Effect</div>
          <div className="grain-texture p-6 bg-background rounded-lg border">
            <p>Content with grain texture background</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Padding Scale</h2>
        <div className="space-y-2">
          {[1, 2, 3, 4, 6, 8, 12, 16, 24].map(size => (
            <div key={size} className="flex items-center gap-4">
              <div className="w-20 text-sm font-mono">p-{size}</div>
              <div className={`bg-primary p-${size}`}>
                <div className="bg-background h-8" />
              </div>
              <div className="text-sm text-muted-foreground">{size * 4}px / {size * 0.25}rem</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Gap Scale</h2>
        <div className="space-y-4">
          {[2, 4, 6, 8].map(size => (
            <div key={size} className="flex flex-col gap-2">
              <div className="text-sm font-mono">gap-{size}</div>
              <div className={`flex gap-${size}`}>
                <div className="w-16 h-16 bg-primary rounded" />
                <div className="w-16 h-16 bg-primary rounded" />
                <div className="w-16 h-16 bg-primary rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
