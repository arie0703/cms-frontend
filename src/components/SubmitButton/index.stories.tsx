import { StoryObj, Meta } from '@storybook/react';
import { SubmitButton } from '.';


const meta: Meta<typeof SubmitButton> = {
  title: 'SubmitButton',
  component: SubmitButton,
  args: {
    buttonText: 'Text'
  }
};

export default meta

type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  argTypes: {
    buttonText: {
      control: 'text',
      type: 'string',
      defaultValue: 'hoge',
    },
  }
}
