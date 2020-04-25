import React from 'react';
import CSSLayout from '@/layout/CSSLayout';
import Space from '@/components/CSS/FontSpace';

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
    title: '文字镂空',
  },
];

const FontSpace:React.FC = () => {
  return (
    <CSSLayout breadcrumb={breadcrumb}>
      <Space />
    </CSSLayout>
  );
};

export default FontSpace;
