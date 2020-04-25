import React from 'react';
import styles from './index.module.less';
import CSSLayout from '@/layout/CSSLayout';

const breadcrumb = [
  {
    title: '首页',
    path: '/',
  },
  {
    title: 'CSS',
  },
];

const CSS:React.FC = () => {
  return (
    <CSSLayout breadcrumb={breadcrumb}>
      <div className={styles['css-wrapper']}>
        CSS
      </div>
    </CSSLayout>
  );
};

export default CSS;
