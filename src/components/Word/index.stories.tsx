import { StoryObj, Meta } from '@storybook/react';
import { Word } from '.';

const meta: Meta<typeof Word> = {
  title: "Word",
  component: Word,
  args: {
    japanese: "日本語",
    portuguese: "ポルトガル語"
  },
};

export default meta

type Story = StoryObj<typeof Word>;

export const Default: Story = {
  argTypes: {}
}
