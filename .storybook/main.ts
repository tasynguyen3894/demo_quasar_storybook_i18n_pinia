import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';
import UnoCSS from 'unocss/vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    if(config.resolve) {
      config.resolve.alias  = {
        ...config.resolve.alias,
        'src': path.resolve(__dirname, "../src"),
      };
    }
    if(config.plugins) {
      config.plugins.push(UnoCSS());
    }
    return config;
  },
};
export default config;
