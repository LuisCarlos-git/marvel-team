import { Meta, Story } from '@storybook/react';
import Heading, { StyledHeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

export const Default: Story<StyledHeadingProps> = args => (
  <Heading {...args}>Heading</Heading>
);

Default.argTypes = {
  fontColor: {
    name: 'font color',
    options: ['black', 'white', 'gray'],
    control: { type: 'select' },
  },

  fontSize: {
    name: 'font size',
    options: [16, 18, 20, 24, 30, 36, 32, 42],
    control: { type: 'select' },
  },

  levels: {
    name: 'levels',
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    control: { type: 'select' },
  },
};

Default.args = { fontColor: 'gray', fontSize: 42, levels: 'h1' };
