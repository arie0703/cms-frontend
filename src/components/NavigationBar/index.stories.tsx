import { StoryObj, Meta } from '@storybook/react';
import { NavigationBar } from '.';

const meta: Meta<typeof NavigationBar> = {
  title: "NavigationBar",
  component: NavigationBar,
  args: {},
};

export default meta

type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  argTypes: {}
}
