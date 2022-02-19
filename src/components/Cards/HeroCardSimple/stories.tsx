import { Meta, Story } from '@storybook/react';
import HeroCardSimple from '.';
import { HeroCardSimpleProps } from './types';

export default {
  title: 'HeroCard',
  component: HeroCardSimple,
} as Meta;

export const Default: Story<HeroCardSimpleProps> = args => (
  <HeroCardSimple {...args} />
);

Default.parameters = {
  backgrounds: { default: 'dark' },
};

Default.args = {
  image:
    'https://portalcinerama.com.br/wp-content/uploads/2020/12/Spider-04.jpg',
  isFavorite: false,
  heroName: 'Spider man',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus consequatur, quo odit quae nesciunt labore itaque dignissimos incidunt, iusto tenetur. Debitis in facilis, culpa nihil dolor eveniet repudiandae esse.',
};

export const IsFavorite: Story<HeroCardSimpleProps> = args => (
  <HeroCardSimple {...args} />
);

IsFavorite.args = {
  image:
    'https://portalcinerama.com.br/wp-content/uploads/2020/12/Spider-04.jpg',
  isFavorite: true,
  heroName: 'Spider man',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus consequatur, quo odit quae nesciunt labore itaque dignissimos incidunt, iusto tenetur. Debitis in facilis, culpa nihil dolor eveniet repudiandae esse.',
};
