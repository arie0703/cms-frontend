import { StoryObj, Meta } from '@storybook/react';
import { WordCard } from '.';

const meta: Meta<typeof WordCard> = {
  title: "WordCard",
  component: WordCard,
  args: {
    japanese: "日本語",
    portuguese: "ポルトガル語"
  },
};

export default meta

type Story = StoryObj<typeof WordCard>;

export const Default: Story = {
  argTypes: {}
}
