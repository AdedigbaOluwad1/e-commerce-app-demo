import { faHouse} from '@fortawesome/free-solid-svg-icons'

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Home',
    icon: faHouse,
    link: true,
  },
  [Pages.Cart]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/cart',
    title: 'Home',
    icon: faHouse,
    link: true,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
    link: false
  },
};

export default routes;
