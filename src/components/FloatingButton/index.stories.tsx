import { StoryObj, Meta } from '@storybook/react';
import { FloatingButton } from '.';


const meta: Meta<typeof FloatingButton> = {
  title: 'FloatingButton',
  component: FloatingButton,
  args: {}
};

export default meta

type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  argTypes: {}
}
