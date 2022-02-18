import type { HTMLAttributes, ReactNode } from 'react';

export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  levels?: HeadingLevels;
} & HTMLAttributes<HTMLHeadingElement>;
