import { StoryObj, Meta } from '@storybook/react';
import { Form } from '.';

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
  args: {},
};

export default meta

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  argTypes: {}
}
