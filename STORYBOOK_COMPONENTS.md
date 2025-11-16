# Storybook Component Reference

## Overview

This Storybook contains **only custom PropertySimple components** and **brand design guidelines**. We don't document shadcn/ui components since they have excellent docs at ui.shadcn.com.

## 📚 What's Included

### Custom Components (14 stories)

All unique components built specifically for PropertySimple:

| Component | Category | Purpose | Location |
|-----------|----------|---------|----------|
| **AssistantAvatar** | Branding | AI assistant avatars (Sarah, Emily, Michael, David) | `Custom/AssistantAvatar` |
| **AiSuggestionBanner** | Patterns | AI-generated suggestions with accept/dismiss | `Custom/AiSuggestionBanner` |
| **ChannelBadge** | UI Elements | Communication channel indicators | `Custom/ChannelBadge` |
| **CampaignMetrics** | Dashboard | 6-stat performance metrics grid | `Custom/CampaignMetrics` |
| **LeadStageCards** | Dashboard | Lead funnel stage visualization | `Custom/LeadStageCards` |
| **PageHeader** | Layout | Reusable page title pattern | `Custom/PageHeader` |
| **ListingCard** | Cards | Property listing card with actions | `Custom/ListingCard` |
| **Logo** | Branding | PropertySimple logo (light/dark) | `Custom/Logo` |
| **Button** | UI Foundation | Button variants (inherited from shadcn) | `UI/Button` |
| **Card** | UI Foundation | Card layouts | `UI/Card` |
| **Badge** | UI Foundation | Status badges | `UI/Badge` |
| **CTA** | Marketing | Call-to-action section | `Marketing/CTA` |

### Design System Documentation

| Section | What It Covers | Location |
|---------|----------------|----------|
| **Brand Guidelines** | Complete brand system | `Design System/Brand Guidelines` |
| **Design Tokens** | Colors, typography, spacing (legacy) | `Design System/Colors` |

## 🎨 Brand Guidelines Coverage

### Colors
- **Light Mode**: Terracotta (#D4653D), Gold (#F4B61A), Cream backgrounds
- **Dark Mode**: Purple (#6D5CFF), Nearly-black (#0A0A0A) backgrounds
- **Semantic Colors**: Success, Warning, Destructive, Info
- **All color values**: HSL and HEX codes included

### Typography
- **Headings**: Cabinet Grotesk (Bold, Semibold)
- **Body**: Outfit (Regular, Medium, Semibold, Bold)
- **Sizes**: text-xs through text-4xl with use cases
- **Weights**: 400-700 with guidelines

### Spacing
- **Padding Scale**: p-2 through p-8 with use cases
- **Gap Scale**: gap-2 through gap-6 for stacks
- **Component Spacing**: Specific recommendations per component type

### Special Effects
- **Gradient Text**: `className="gradient-text"` for hero headlines
- **Grain Texture**: `className="grain-texture"` for premium feel
- **Border Radius**: Default 12px (0.75rem)
- **Shadows**: sm, md, lg with use cases

## 🚀 Using Storybook

### Start Storybook
```bash
npm run storybook
```
Opens at http://localhost:6006/

### Navigate Components
1. **Custom/** - All PropertySimple-specific components
2. **Design System/** - Brand guidelines and tokens
3. **UI/** - Base components (Button, Card, Badge)
4. **Marketing/** - Marketing page components

### Interactive Features
- **Controls Panel**: Change props in real-time
- **Accessibility Tab**: WCAG compliance testing
- **Docs Tab**: Auto-generated documentation
- **Dark Mode Toggle**: Test light/dark themes

## 📖 Component Usage Examples

### AiSuggestionBanner
```tsx
import { AiSuggestionBanner } from '@/components/common/AiSuggestionBanner';

<AiSuggestionBanner
  suggestion="Follow up with this lead - high engagement detected"
  variant="compact"
  onAccept={() => handleAccept()}
  onDismiss={() => handleDismiss()}
/>
```

**Variants:**
- `default` - Full banner with title and description
- `compact` - Inline banner for tight spaces
- `inline` - Minimal inline suggestion

### CampaignMetrics
```tsx
import { CampaignMetrics } from '@/components/campaign-detail/CampaignMetrics';

<CampaignMetrics
  adSpend="$1,200"
  impressions="45,000"
  interactions="1,350"
  leadCount={8}
/>
```

**Automatically calculates:**
- Cost per lead
- Click-through rate
- Performance indicators

### LeadStageCards
```tsx
import { LeadStageCards } from '@/components/concierge/LeadStageCards';

<LeadStageCards
  stages={{
    new: 12,
    aiEngaging: 8,
    agentNeeded: 5,
    converted: 3,
  }}
/>
```

**Shows 4 stages:**
- New leads
- AI engaging
- Agent needed
- Converted

### PageHeader
```tsx
import PageHeader from '@/components/layout/PageHeader';

<PageHeader
  title="Campaigns"
  description="Create and manage advertising campaigns"
>
  <Button>
    <Plus className="mr-2 h-4 w-4" />
    New Campaign
  </Button>
</PageHeader>
```

### ListingCard
```tsx
import { ListingCard } from '@/components/listing-manager/ListingCard';

<ListingCard
  price="$450,000"
  address="345 Rim Shadows Dr, Sedona, AZ 86336"
  bedrooms={3}
  bathrooms={2}
  imageUrl="..."
  status="active"
  primaryActionLabel="Create Ad"
  showEditDelete={true}
  onPrimaryAction={handleCreateAd}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

**Statuses:**
- `active` - Currently listed
- `sold` - Shows SOLD badge
- `inactive` - Grayed out with reactivate option

### ChannelBadge
```tsx
import { ChannelBadge } from '@/components/inbox/ChannelBadge';

<ChannelBadge channel="phone" />  // 📞 Call
<ChannelBadge channel="sms" />    // 💬 SMS
<ChannelBadge channel="email" />  // 📧 Email
```

## 🎯 When to Add New Stories

Add stories for components that are:

✅ **Should add:**
- Custom components unique to PropertySimple
- Reusable patterns used in multiple places
- Components with multiple variants or states
- Complex interactive components
- Brand-specific implementations

❌ **Don't add:**
- One-off page-specific components
- Simple wrappers around shadcn components
- Components tightly coupled to specific data
- Components that will rarely be reused

## 📝 Story Template

When creating new stories, use this template:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta = {
  title: 'Custom/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'padded', // or 'centered', 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Component variant',
    },
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // default props
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Show all variants side-by-side */}
    </div>
  ),
};

export const DarkMode: Story = {
  args: {
    // props
  },
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

## 🔄 Keeping Storybook Updated

### When to update:
1. **New custom component** - Add story immediately
2. **Component gets new variant** - Add story for new variant
3. **Brand colors change** - Update Brand Guidelines
4. **Design tokens updated** - Update Design System docs

### Update checklist:
- [ ] Create `.stories.tsx` file next to component
- [ ] Include all variants and states
- [ ] Add dark mode example
- [ ] Document all props with controls
- [ ] Show real-world usage examples
- [ ] Test in Storybook locally
- [ ] Commit with descriptive message

## 📊 Current Coverage

**14 component stories** covering:
- ✅ All custom brand components (AssistantAvatar, Logo)
- ✅ All custom UI patterns (AiSuggestionBanner, ChannelBadge)
- ✅ All custom dashboard widgets (CampaignMetrics, LeadStageCards)
- ✅ All custom cards (ListingCard)
- ✅ All layout patterns (PageHeader)
- ✅ Complete brand guidelines (colors, typography, spacing)
- ✅ Base UI components (Button, Card, Badge)

**Not included** (intentionally):
- shadcn/ui components (use ui.shadcn.com)
- One-off page components
- Server components
- API integration components

## 🎓 Learning Resources

- **Storybook Docs**: https://storybook.js.org/docs
- **Our Usage Guide**: `STORYBOOK_GUIDE.md`
- **PropertySimple Brand**: See `Design System/Brand Guidelines` in Storybook

---

**Last Updated**: January 2025
**Storybook Version**: 10.0.7
**Framework**: Next.js 16 with App Router
