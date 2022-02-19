import { Meta, Story } from '@storybook/react';
import SearchHero from '.';

export default {
  title: 'SearchHero',
  component: SearchHero,
} as Meta;

export const Default: Story = () => <SearchHero />;

Default.parameters = {
  backgrounds: { default: 'dark' },
};
