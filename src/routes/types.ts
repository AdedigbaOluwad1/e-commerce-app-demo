import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Welcome = 'Welcome',
  NotFound = 'NotFound',
  Cart = 'Cart'
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  path: string;
  icon?: any;
  link: boolean
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
