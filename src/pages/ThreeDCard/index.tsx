import React from 'react';
import styles from './index.module.less';
import CSSLayout from '@/layout/CSSLayout';
import ThreeDCard from '@/components/CSS/ThreeDCard';

const breadcrumb = [
  {
    title: '首页',
    path: '/',
  },
  {
    title: 'CSS',
    path: '/css',
  },
  {
    title: '3D卡片',
  },
];

const Card:React.FC = () => {
  return (
    <CSSLayout breadcrumb={breadcrumb}>
      <div className={styles['card-wrap']}>
        <ThreeDCard
          pic="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=400"
          title="come on with me"
          content="childhood to this deadly disease. It was not unusual to find him playing and racing around his backyard, wearing his medicine-laden backpack"
        />
        <ThreeDCard
          pic="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=400"
          title="come on with me"
          content="deadly disease. It was not unusual to find him playing and racing around his backyard, wearing his medicine-laden backpack"
        />
        <ThreeDCard
          pic="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=400"
          title="come on with me"
          content="childhood to this deadly disease. It was not unusual to find him playing and racing around his backyard, wearing his medicine-laden backpack"
        />
      </div>
    </CSSLayout>
  );
};

export default Card;
