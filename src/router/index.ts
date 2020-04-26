import Home from '@/pages/Home';
import CSS from '@/pages/CSS';
import BasicLayout from '@/layout/BasicLayput';
import NotFound from '@/pages/NotFound';
import FontSpace from '@/pages/FontSpace';
import Card from '@/pages/ThreeDCard';

const router = [
  {
    path: '/',
    component: BasicLayout,
    exact: true,
    redirect: '/index',
    children: [
      {
        path: '/index',
        exact: true,
        component: Home,
      },
      {
        path: '/css',
        exact: true,
        component: CSS,
      },
      {
        path: '/css/fontspace',
        exact: true,
        component: FontSpace,
      },
      {
        path: '/css/3dcard',
        exact: true,
        component: Card,
      },
    ],
  },
  {
    path: '/index/about',
    exact: true,
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default router;
