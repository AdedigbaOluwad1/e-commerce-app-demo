import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

enum Pages {
  Welcome = 'Welcome',
  NotFound = 'NotFound',
  Cart = 'Cart',
  History = 'History'
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
