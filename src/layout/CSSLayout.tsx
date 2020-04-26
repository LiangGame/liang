import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/layout/Layout.module.less';
import { Layout } from 'antd';
import MyBreadcrumb from '../components/Breadcrumb';
import MySider from '../components/Sider';

const { Content } = Layout;
interface CSSLayoutProps {
  breadcrumb: Array<any>;
}
const siderMenu = [
  {
    title: '2020-04',
    children: [
      {
        title: '镂空文字',
        path: '/css/fontSpace',
      },
      {
        title: '3D卡片',
        path: '/css/3dcard',
      },
    ],
  },
];

const CSSLayout:React.FC<CSSLayoutProps> = (props) => {
  const { breadcrumb } = props;
  return (
    <Content className={styles['site-content']}>
      <MyBreadcrumb dataSource={breadcrumb} />
      <Layout className={styles['site-layout']}>
        <MySider menuList={siderMenu} />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {props.children}
        </Content>
      </Layout>
    </Content>
  );
};

CSSLayout.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CSSLayout;
