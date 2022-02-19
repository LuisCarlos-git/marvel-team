import { Meta, Story } from '@storybook/react';
import InformativeCard from '.';
import { InformativeCardProps } from './types';

export default {
  title: 'InformativeCard',
  component: InformativeCard,
} as Meta;

export const Default: Story<InformativeCardProps> = args => (
  <InformativeCard {...args} />
);

Default.args = {
  image:
    'https://portalcinerama.com.br/wp-content/uploads/2020/12/Spider-04.jpg',
  heroName: 'Spider man',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus consequatur, quo odit quae nesciunt labore itaque dignissimos incidunt, iusto tenetur. Debitis in facilis, culpa nihil dolor eveniet repudiandae esse.',
};

export const FullInformaation: Story<InformativeCardProps> = args => (
  <InformativeCard {...args} />
);

FullInformaation.args = {
  comicsLaunchDate: '10/02/2020',
  comicsPageQuantity: 240,
  price: 0.9,
  image:
    'https://portalcinerama.com.br/wp-content/uploads/2020/12/Spider-04.jpg',
  heroName: 'Spider man',
  variant: 'fullInformations',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus consequatur, quo odit quae nesciunt labore itaque dignissimos incidunt, iusto tenetur. Debitis in facilis, culpa nihil dolor eveniet repudiandae esse.',
};
