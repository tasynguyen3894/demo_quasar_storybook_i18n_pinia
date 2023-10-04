import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonNotify from 'src/components/UI/ButtonNotify.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'UI/ButtonNotify',
  component: ButtonNotify,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    message: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof ButtonNotify>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Notify',
    message: 'Message'
  },
};
