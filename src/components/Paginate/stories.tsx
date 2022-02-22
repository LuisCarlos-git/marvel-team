import { Meta, Story } from '@storybook/react';
import Paginate from '.';
import { PaginateProps } from './types';

export default {
  title: 'Paginate',
  component: Paginate,
} as Meta;

export const Default: Story<PaginateProps> = args => <Paginate {...args} />;

Default.args = {
  limit: 12,
  offset: 240,
  total: 1200,
};
