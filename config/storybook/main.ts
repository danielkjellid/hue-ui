import path from 'path'
import type { StorybookConfig } from '@storybook/react-vite'

const getPath = (storyPath) => path.resolve(__dirname, storyPath).replace(/\\/g, '/')

const storiesPath = [
  getPath('../../src/hue-ui-*/**/*.story.@(ts|tsx)'),
  getPath('../../src/hue-ui-*/**/*.demos.story.@(ts|tsx)'),
]

const config: StorybookConfig = {
  stories: [...storiesPath],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
