import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const MyFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Liang ©{new Date().getFullYear()} Created by Liang: 15517072173@163.com
    </Footer>
  );
};

export default MyFooter;
