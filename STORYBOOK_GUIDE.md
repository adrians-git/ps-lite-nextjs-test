# Storybook Usage Guide

## What is Storybook?

Storybook is an interactive component library that lets you:
- Browse and test all UI components in isolation
- See all variants and states of each component
- Interact with component props in real-time
- Test accessibility compliance
- Document your design system
- Share components with designers and stakeholders

## Getting Started

### Start Storybook

```bash
npm run storybook
```

Storybook will start at **http://localhost:6006/**

### Build Storybook (for deployment)

```bash
npm run build-storybook
```

This creates a static site in `storybook-static/` that can be deployed anywhere.

## Using Storybook

### 1. Browse Components

The left sidebar shows all available components organized by category:

- **Design System** - Colors, typography, spacing
- **UI** - Button, Card, Badge, Input, etc.
- **Marketing** - CTA, Hero, VideoShowcase, etc.
- **Components** - AssistantAvatar, ContactCard, etc.

Click any component to view its stories.

### 2. View Component Variants

Each component has multiple "stories" showing different configurations:

**Example: Button component**
- Primary - Default button style
- Secondary - Alternate style
- Destructive - For dangerous actions
- With Icon - Button with icon
- All Variants - Side-by-side comparison

### 3. Interactive Controls

At the bottom of each story, you'll see the **Controls** panel:

```
variant: [default ▼]
size: [default ▼]
disabled: [ ]
```

Change these controls to see the component update in real-time. This is perfect for:
- Testing different prop combinations
- Finding the right variant for your use case
- Experimenting without writing code

### 4. Accessibility Testing

Click the **Accessibility** tab at the bottom to see:
- ✅ Passed checks
- ⚠️ Warnings
- ❌ Violations

This uses the a11y addon to automatically test WCAG compliance.

### 5. View Component Code

Click the **Docs** tab to see:
- Component description
- Props table with types
- Code snippets you can copy
- All stories in one view

### 6. Test Dark Mode

Use the background switcher in the toolbar:
- Light (default white)
- Dark (dark mode)
- Warm (terracotta background)

## Creating New Stories

### Basic Story File

Create a file named `ComponentName.stories.tsx` next to your component:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta = {
  title: 'Category/YourComponent',  // Sidebar location
  component: YourComponent,
  parameters: {
    layout: 'centered',  // or 'fullscreen', 'padded'
  },
  tags: ['autodocs'],  // Enable automatic documentation
  argTypes: {
    // Define interactive controls
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Create individual stories
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Click me',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

// Complex story with custom render
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <YourComponent variant="default">Default</YourComponent>
      <YourComponent variant="primary">Primary</YourComponent>
      <YourComponent variant="secondary">Secondary</YourComponent>
    </div>
  ),
};
```

### Story Organization

Place stories in one of two locations:

1. **Next to component** (recommended for UI components):
   ```
   components/ui/button.tsx
   components/ui/button.stories.tsx
   ```

2. **In stories directory** (for design system docs):
   ```
   stories/DesignTokens.stories.tsx
   stories/GettingStarted.mdx
   ```

Both locations are automatically scanned (configured in `.storybook/main.ts`).

### Control Types

Common control types for interactive props:

```typescript
argTypes: {
  // Dropdown select
  variant: {
    control: 'select',
    options: ['default', 'primary', 'secondary'],
  },

  // Boolean checkbox
  disabled: {
    control: 'boolean',
  },

  // Text input
  label: {
    control: 'text',
  },

  // Number input
  maxItems: {
    control: 'number',
  },

  // Color picker
  backgroundColor: {
    control: 'color',
  },

  // Date picker
  startDate: {
    control: 'date',
  },

  // Radio buttons
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
  },
}
```

## Useful Patterns

### Testing Different States

```typescript
export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button className="opacity-50">Loading</Button>
    </div>
  ),
};
```

### Showing Real-World Examples

```typescript
export const PropertyListing: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>345 Rim Shadows Dr</CardTitle>
        <CardDescription>Sedona, AZ 86336</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Price</span>
            <span className="font-semibold">$450,000</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};
```

### Documenting Design Tokens

```typescript
const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-24 rounded-lg ${value}`} />
    <div className="font-semibold text-sm">{name}</div>
  </div>
);

export const BrandColors: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <ColorSwatch name="Primary" value="bg-primary" />
      <ColorSwatch name="Secondary" value="bg-secondary" />
    </div>
  ),
};
```

## Available Addons

### 1. Docs (`@storybook/addon-docs`)
- Auto-generates documentation from component props
- Displays all stories in one page
- Shows code snippets

**Usage**: Click the "Docs" tab on any component

### 2. Accessibility (`@storybook/addon-a11y`)
- Tests WCAG compliance automatically
- Shows violations, warnings, and passes
- Helps ensure components are accessible

**Usage**: Click the "Accessibility" tab at the bottom

### 3. Onboarding (`@storybook/addon-onboarding`)
- Guided tour for first-time users
- Shows key features and workflow

**Usage**: Appears automatically on first launch

### 4. Vitest (`@storybook/addon-vitest`)
- Run component tests inside Storybook
- See test results alongside components

**Usage**: Configure test files, tests appear in "Tests" tab

### 5. Chromatic (`@chromatic-com/storybook`)
- Visual regression testing
- Catch UI bugs automatically
- Deploy Storybook to cloud

**Usage**: Sign up at chromatic.com, run `npx chromatic`

## Configuration Files

### `.storybook/main.ts`
Main configuration file:
- Story file paths
- Addons
- Framework settings
- Static asset directory

### `.storybook/preview.tsx`
Preview configuration:
- Global decorators
- Default parameters
- Background options
- Theme settings

Currently configured with:
- Global CSS import (`app/globals.css`)
- Three backgrounds: light, dark, warm
- Default layout: centered

## Tips & Best Practices

### 1. Write Stories as You Build
Create stories immediately when building a new component. This:
- Forces you to think about all states and variants
- Provides instant visual feedback
- Creates documentation automatically

### 2. Show Real-World Usage
Don't just show isolated components - show how they're used together:
```typescript
export const ContactCardExample: Story = {
  render: () => (
    <ContactCard
      name="John Doe"
      email="john@example.com"
      tags={['hot-lead', 'scheduled']}
      lastContact="2 hours ago"
    />
  ),
};
```

### 3. Test Edge Cases
Create stories for edge cases:
- Very long text
- Empty states
- Loading states
- Error states

### 4. Use Dark Mode
Always check components in dark mode:
```typescript
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
```

### 5. Document Design Decisions
Use descriptions to explain why:
```typescript
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for primary actions like "Save" or "Submit". Should only appear once per page.',
      },
    },
  },
};
```

## Common Issues

### Issue: Component Not Showing
**Solution**: Check that the story file is in a scanned directory:
- `components/**/*.stories.tsx`
- `stories/**/*.stories.tsx`

### Issue: Styles Not Applied
**Solution**: Ensure `globals.css` is imported in `.storybook/preview.tsx`:
```typescript
import '../app/globals.css';
```

### Issue: TypeScript Errors
**Solution**: Install type definitions:
```bash
npm install -D @types/node
```

### Issue: Next.js Features Not Working
**Solution**: Storybook uses its own webpack config. Some Next.js features (like Image optimization) may need special configuration.

## Resources

- **Storybook Docs**: https://storybook.js.org/docs
- **Next.js Integration**: https://storybook.js.org/docs/get-started/nextjs
- **Writing Stories**: https://storybook.js.org/docs/writing-stories
- **Accessibility Testing**: https://storybook.js.org/addons/@storybook/addon-a11y

## Current Component Coverage

Stories created for:
- ✅ Button (all variants, sizes, states)
- ✅ Card (basic, with header, property listing)
- ✅ Badge (all status variants)
- ✅ AssistantAvatar (all reps, all sizes)
- ✅ CTA (marketing component)
- ✅ Design Tokens (colors, typography, spacing)

**Next components to add stories for:**
- Input, Textarea, Select (form components)
- ContactCard, ListingCard (app-specific cards)
- Navigation components
- Layout components
- AI chat components

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start dev server |
| `npm run build-storybook` | Build static site |
| `npx chromatic` | Visual testing |

| Shortcut | Action |
|----------|--------|
| `/` | Search components |
| `A` | Toggle addons panel |
| `D` | Toggle dark mode |
| `F` | Toggle fullscreen |
| `S` | Toggle sidebar |

---

**Happy component building!** 🎨

For questions or issues, check the Storybook documentation or create an issue in the project repo.
