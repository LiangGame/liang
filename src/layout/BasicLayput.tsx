import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout } from 'antd';
import log from 'loglevel';
import MyHeader from '../components/Header';
import MyFooter from '../components/Footer';

type BasicLayoutProps = RouteComponentProps;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  log.debug('BasicLayout', props);
  return (
    <Layout>
      <MyHeader />
      {props.children}
      <MyFooter />
    </Layout>
  );
};

export default withRouter(BasicLayout);
