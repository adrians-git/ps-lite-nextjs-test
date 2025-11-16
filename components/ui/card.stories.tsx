import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content area with some example text.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Enter your details to create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input className="w-full px-3 py-2 border rounded-md" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input className="w-full px-3 py-2 border rounded-md" placeholder="john@example.com" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Account</Button>
      </CardFooter>
    </Card>
  ),
};

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
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Beds</span>
            <span className="font-semibold">3 beds</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Baths</span>
            <span className="font-semibold">2 baths</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Sqft</span>
            <span className="font-semibold">2,100 sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1">Schedule Showing</Button>
        <Button variant="outline" className="flex-1">More Info</Button>
      </CardFooter>
    </Card>
  ),
};

export const Stats: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Total Leads</CardDescription>
          <CardTitle className="text-4xl">1,234</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Active Campaigns</CardDescription>
          <CardTitle className="text-4xl">12</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">3 ending this week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Ad Spend</CardDescription>
          <CardTitle className="text-4xl">$2.4K</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">$18.50 per lead</p>
        </CardContent>
      </Card>
    </div>
  ),
};
